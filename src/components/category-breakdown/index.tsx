import { Box, Text } from "@chakra-ui/react";
import { EmptyCategoriesState } from "./empty-state";
import { CategoryBreakdownItem } from "./category-item";
import { useBudgetCategories } from "../../hooks/use-budget-categories";

export function CategoryBreakdown() {
  const { budgetCategories, budgetCategoriesLength } = useBudgetCategories();
  return (
    <Box>
      <Text variant="heading-3">Category Breakdown</Text>
      <Box mt="1rem" pt="1rem">
        {budgetCategoriesLength > 0 ? (
          <Box>
            {budgetCategories.map((category) => (
              <CategoryBreakdownItem key={category.value} category={category} />
            ))}
          </Box>
        ) : (
          <EmptyCategoriesState />
        )}
      </Box>
    </Box>
  );
}
