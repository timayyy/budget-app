import {
  Box,
  Button,
  Center,
  Circle,
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import { DownIcon } from "../../../icons";
import { useBudgetContext } from "../../../../context/budget-context";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { CategoryOptionSingle } from "../../../../reducer/budget-reducer/types";

type AddCategoryFormProps = {
  amountValue: string;
  selectedCategory: string;
  isMoreThanBudget: boolean;
  handleAmountValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
  returnSelectedCategory: () => CategoryOptionSingle | undefined;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
};

export function AddCategoryForm({
  amountValue,
  handleAmountValueChange,
  isMoreThanBudget,
  returnSelectedCategory,
  selectedCategory,
  setSelectedCategory,
}: AddCategoryFormProps) {
  const { state } = useBudgetContext();
  return (
    <VStack spacing="2rem" align="initial">
      <Box shadow="lg">
        <Menu>
          <MenuButton
            w="100%"
            textAlign="left"
            as={Button}
            bg="white"
            rightIcon={<DownIcon height="7px" width="1.3rem" />}
            p="1rem"
            h="4.4rem"
          >
            <Text variant="heading-2" color="brand.gray3">
              {selectedCategory ? (
                <Box>
                  <HStack spacing={"1rem"}>
                    <Circle
                      size="2.4rem"
                      bg={returnSelectedCategory()?.color.light}
                    >
                      {returnSelectedCategory()?.icon}
                    </Circle>
                    <Text color="brand.main" variant="heading-2">
                      {returnSelectedCategory()?.name}
                    </Text>
                  </HStack>
                </Box>
              ) : (
                "Select Expense Category"
              )}
            </Text>
          </MenuButton>
          <MenuList w="100%">
            {state.budgetCategoryOptions.length < 1 ? (
              <Center w="100%" p="2rem">
                <Text variant="heading-2">No options</Text>
              </Center>
            ) : (
              state.budgetCategoryOptions.map((cat) => (
                <MenuItem
                  onClick={() => setSelectedCategory(cat.value)}
                  _hover={{ bg: cat.color.light }}
                  key={cat.value}
                >
                  <HStack spacing={"1rem"}>
                    <Circle size="2.4rem" bg={cat.color.light}>
                      {cat.icon}
                    </Circle>
                    <Text color="brand.main" variant="heading-2">
                      {cat.name}
                    </Text>
                  </HStack>
                </MenuItem>
              ))
            )}
          </MenuList>
        </Menu>
      </Box>
      <Box>
        <FormControl isInvalid={isMoreThanBudget}>
          <Input
            type="number"
            value={amountValue}
            onChange={handleAmountValueChange}
            variant="flushed"
            color="brand.main"
            fontSize="1.4rem"
            fontWeight="500"
            placeholder="Amount (in ₦)"
            borderBottomColor="brand.gray3"
            p="1rem"
            isInvalid={isMoreThanBudget}
            _placeholder={{
              color: "brand.gray3",
              fontSize: "1.4rem",
              fontWeight: 500,
            }}
          />
          {isMoreThanBudget && (
            <FormErrorMessage>
              Amount is more than remaining budget!
            </FormErrorMessage>
          )}
        </FormControl>
      </Box>
    </VStack>
  );
}
