import { Text } from "@chakra-ui/react";
import { usePercentageRemaining } from "../../../../../hooks/use-percentage-util";

export function BudgetRemainder() {
  const { percentageRemaining } = usePercentageRemaining();

  return (
    <Text variant="body-2" color="brand.gray">
      % of budget remaining : {percentageRemaining.toFixed(1)}%
    </Text>
  );
}
