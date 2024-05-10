import { Drawer, DrawerOverlay } from "@chakra-ui/react";
import { useBudgetContext } from "../../../context/budget-context";
import { CreateBudgetDrawerContent } from "./drawer-content";

export type CreateBudgeSteps = "budget" | "category";

export function CreateBudgetDrawer() {
  const { state, dispatch } = useBudgetContext();

  function closeCreateBudgetModal() {
    dispatch({
      type: "show-create-budget-modal",
      payload: false,
    });
  }

  return (
    <Drawer
      size="lg"
      isOpen={state.isCreateBudgetModalOpen}
      placement="right"
      onClose={closeCreateBudgetModal}
    >
      <DrawerOverlay />
      <CreateBudgetDrawerContent />
    </Drawer>
  );
}
