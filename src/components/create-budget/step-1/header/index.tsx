import { Text, VStack } from "@chakra-ui/react";
import { useBudgetContext } from "../../../../context/budget-context";

type StepHeaderProps = {
  subHeading: string;
};

export function StepHeader({ subHeading }: StepHeaderProps) {
  const { state } = useBudgetContext();

  const isBudgetCreated = !!state.budget;

  return (
    <VStack align="initial" spacing="1.6rem">
      <Text as="h1" variant="heading-1" color="brand.main">
        {isBudgetCreated ? "Edit current budget" : "Create new budget"}
      </Text>
      <Text variant="body-1" color="brand.gray">
        {subHeading}
      </Text>
    </VStack>
  );
}
