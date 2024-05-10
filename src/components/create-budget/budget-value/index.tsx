import { Text } from "@chakra-ui/react";
import { useBudgetContext } from "../../../context/budget-context";

export function BudgetValue() {
  const { state } = useBudgetContext();
  return (
    <Text variant="heading-1" noOfLines={1}>
      ₦{Number(state.budget?.amount).toLocaleString()}
    </Text>
  );
}
