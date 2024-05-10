import { Box, Text } from "@chakra-ui/react";
import { useBudgetContext } from "../../context/budget-context";
import { EmptyCategoriesState } from "./empty-state";
import { CategoryBreakdownItem } from "./category-item";

export function CategoryBreakdown() {
  const { state } = useBudgetContext();
  return (
    <Box>
      <Text variant="heading-3">Category Breakdown</Text>
      <Box mt="1rem" pt="1rem">
        {state.budgetCategories.length > 0 ? (
          <Box>
            {state.budgetCategories.map((category) => (
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
