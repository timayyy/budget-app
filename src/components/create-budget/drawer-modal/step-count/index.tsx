import { Text } from "@chakra-ui/react";
import { useCurrentCreateBudgetStep } from "../../../../hooks/use-create-budget-modal";

export function StepCount() {
  const { isBudgetCurrentStep } = useCurrentCreateBudgetStep();
  return (
    <Text variant="sub-heading-1" color="brand.main">
      {isBudgetCurrentStep ? 1 : 2}/2
    </Text>
  );
}
