import { Text } from "@chakra-ui/react";
import { calculatePercentageRemaining } from "../../actions";
import { useBudgetContext } from "../../../../../context/budget-context";

export function BudgetRemainder() {
  const { state } = useBudgetContext();

  const totalPercentage = Number(
    state.budgetCategories
      .reduce((acc, item) => (acc += item.percentage), 0)
      .toFixed(1),
  );
  return (
    <Text variant="body-2" color="brand.gray">
      % of budget remaining : {calculatePercentageRemaining(totalPercentage)}%
    </Text>
  );
}
