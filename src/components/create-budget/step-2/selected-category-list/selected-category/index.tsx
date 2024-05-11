import {
  Box,
  Circle,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { MinusIcon } from "../../../../icons";
import type { CategorySingle } from "../../../../../reducer/budget-reducer/types";
import { useDeleteCategory } from "../../../../../hooks/use-budget-categories";

type SelectedCategoryItemProps = {
  category: CategorySingle;
};

export function SelectedCategoryItem({ category }: SelectedCategoryItemProps) {
  const { deleteCategory } = useDeleteCategory(category.value);

  return (
    <Flex align="center" gap="1rem">
      <Box>
        <HStack spacing={"1rem"}>
          <Circle size="2.4rem" bg={category.color.light}>
            {category.icon}
          </Circle>
          <Text color="brand.main" variant="heading-2" noOfLines={1}>
            {category.name}
          </Text>
        </HStack>
      </Box>
      <Spacer />
      <Box>
        <HStack spacing="3rem">
          <HStack spacing="2rem">
            <Text color="brand.main" variant="heading-2" noOfLines={1}>
              ₦{Number(category.amount).toLocaleString()}
            </Text>
            <Text color="brand.main" variant="heading-2">
              {category.percentage}%
            </Text>
          </HStack>
          <Box>
            <IconButton
              isRound={true}
              aria-label="Delete category"
              icon={<MinusIcon height="2px" width="1.4rem" />}
              size="lg"
              variant="outline"
              bg="rgba(151, 157, 172, 0.2)"
              // isDisabled={isMoreThanBudget}
              // disabled={disableBtn}
              onClick={deleteCategory}
            />
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
}
