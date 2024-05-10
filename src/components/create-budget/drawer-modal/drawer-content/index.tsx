import { DrawerContent } from "@chakra-ui/react";
import { CreateBudgetDrawerHeader } from "../drawer-header";
import { CreateBudgetStep1Body } from "../../step-1";
import { CreateBudgetStep2Body } from "../../step-2";
import { useBudgetContext } from "../../../../context/budget-context";

export function CreateBudgetDrawerContent() {
  const { state } = useBudgetContext();

  const returnContent = {
    budget: {
      body: <CreateBudgetStep1Body />,
    },
    category: {
      body: <CreateBudgetStep2Body />,
    },
  };

  return (
    <DrawerContent p="3rem">
      <CreateBudgetDrawerHeader />
      {returnContent[state.currentCreateBudgetStep].body}
    </DrawerContent>
  );
}
