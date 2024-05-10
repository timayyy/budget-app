import { Box, VStack } from "@chakra-ui/react";
import { useBudgetContext } from "../../../../context/budget-context";
import { SelectedCategoryItem } from "./selected-category";

export function SelectedCategoryList() {
  const { state } = useBudgetContext();
  return (
    <Box mt="4rem">
      <VStack spacing="2rem" alignItems="initial">
        {state.budgetCategories.map((category) => (
          <SelectedCategoryItem key={category.value} category={category} />
        ))}
      </VStack>
    </Box>
  );
}
