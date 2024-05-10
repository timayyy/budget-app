import { VStack, DrawerBody } from "@chakra-ui/react";
import { useBudgetContext } from "../../../context/budget-context";
import { useState } from "react";
import { StepHeader } from "./header";
import { CreateBudgetForm } from "./form";
import { CreateBudgetDrawerFooter } from "./footer";

export function CreateBudgetStep1Body() {
  const { state } = useBudgetContext();

  const [budgetAmount, setBudgetAmount] = useState(
    state.budget ? state.budget.amount : "",
  );

  return (
    <>
      <DrawerBody px="0">
        <VStack align="initial" spacing="2.4rem">
          <StepHeader subHeading="How much would you like to budget for this month?" />
          <CreateBudgetForm
            budgetAmount={budgetAmount}
            setBudgetAmount={setBudgetAmount}
          />
        </VStack>
      </DrawerBody>
      <CreateBudgetDrawerFooter budgetAmount={budgetAmount} />
    </>
  );
}
