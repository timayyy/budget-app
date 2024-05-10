import { Text } from "@chakra-ui/react";
import { useBudgetContext } from "../../../../context/budget-context";

export function StepCount() {
  const { state } = useBudgetContext();
  const isBudgetCurrentStep = state.currentCreateBudgetStep === "budget";
  return (
    <Text variant="sub-heading-1" color="brand.main">
      {isBudgetCurrentStep ? 1 : 2}/2
    </Text>
  );
}
