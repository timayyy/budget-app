import { Text, VStack } from "@chakra-ui/react";
import { useBudget } from "../../../../hooks/use-budget";

type StepHeaderProps = {
  subHeading: string;
};

export function StepHeader({ subHeading }: StepHeaderProps) {
  const { hasBudget } = useBudget();

  return (
    <VStack align="initial" spacing="1.6rem">
      <Text as="h1" variant="heading-1" color="brand.main">
        {hasBudget ? "Edit current budget" : "Create new budget"}
      </Text>
      <Text variant="body-1" color="brand.gray">
        {subHeading}
      </Text>
    </VStack>
  );
}
