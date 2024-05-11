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
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { usePercentageUtil } from "../../../../hooks/use-percentage-util";
import { useBudgetCategoryOptions } from "../../../../hooks/use-budget-categories";

type AddCategoryFormProps = {
  amountValue: string;
  selectedCategory: string;
  handleAmountValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
};

export function AddCategoryForm({
  amountValue,
  handleAmountValueChange,
  selectedCategory,
  setSelectedCategory,
}: AddCategoryFormProps) {
  const inputAmount = Number(amountValue);

  const { isMoreThanBudget } = usePercentageUtil(inputAmount);
  const { budgetCategoryOptions, selectedCategoryOption } =
    useBudgetCategoryOptions(selectedCategory);

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
              {selectedCategoryOption ? (
                <Box>
                  <HStack spacing={"1rem"}>
                    <Circle
                      size="2.4rem"
                      bg={selectedCategoryOption.color.light}
                    >
                      {selectedCategoryOption.icon}
                    </Circle>
                    <Text color="brand.main" variant="heading-2">
                      {selectedCategoryOption.name}
                    </Text>
                  </HStack>
                </Box>
              ) : (
                "Select Expense Category"
              )}
            </Text>
          </MenuButton>
          <MenuList w="100%">
            {budgetCategoryOptions.length < 1 ? (
              <Center w="100%" p="2rem">
                <Text variant="heading-2">No options</Text>
              </Center>
            ) : (
              budgetCategoryOptions.map((cat) => (
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
