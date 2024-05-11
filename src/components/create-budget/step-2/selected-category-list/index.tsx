import { Box, VStack } from "@chakra-ui/react";
import { SelectedCategoryItem } from "./selected-category";
import { useBudgetCategories } from "../../../../hooks/use-budget-categories";

export function SelectedCategoryList() {
  const { budgetCategories } = useBudgetCategories();
  return (
    <Box mt="4rem">
      <VStack spacing="2rem" alignItems="initial">
        {budgetCategories.map((category) => (
          <SelectedCategoryItem key={category.value} category={category} />
        ))}
      </VStack>
    </Box>
  );
}
