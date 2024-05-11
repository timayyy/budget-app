import { VStack, DrawerBody } from "@chakra-ui/react";
import { StepHeader } from "./header";
import { CreateBudgetForm } from "./form";
import { CreateBudgetDrawerFooter } from "./footer";
import { useCreateBudgetForm } from "../../../hooks/use-create-budget-modal";

export function CreateBudgetStep1Body() {
  const { formBudgetAmount, setFormBudgetAmount } = useCreateBudgetForm();
  return (
    <>
      <DrawerBody px="0">
        <VStack align="initial" spacing="2.4rem">
          <StepHeader subHeading="How much would you like to budget for this month?" />
          <CreateBudgetForm
            formBudgetAmount={formBudgetAmount}
            setFormBudgetAmount={setFormBudgetAmount}
          />
        </VStack>
      </DrawerBody>
      <CreateBudgetDrawerFooter formBudgetAmount={formBudgetAmount} />
    </>
  );
}
