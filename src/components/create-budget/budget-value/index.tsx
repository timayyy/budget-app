import { Text } from "@chakra-ui/react";
import { useBudget } from "../../../hooks/use-budget";

export function BudgetValue() {
  const { budgetAmount } = useBudget();
  return (
    <Text variant="heading-1" noOfLines={1}>
      ₦{budgetAmount.toLocaleString()}
    </Text>
  );
}
