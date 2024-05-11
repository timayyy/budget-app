import { Drawer, DrawerOverlay } from "@chakra-ui/react";
import { CreateBudgetDrawerContent } from "./drawer-content";
import { useToggleCreateBudgetModal } from "../../../hooks/use-create-budget-modal";

export type CreateBudgeSteps = "budget" | "category";

export function CreateBudgetDrawer() {
  const { closeCreateBudgetModal, isCreateBudgetModalOpen } =
    useToggleCreateBudgetModal();
  return (
    <Drawer
      size="lg"
      isOpen={isCreateBudgetModalOpen}
      placement="right"
      onClose={closeCreateBudgetModal}
    >
      <DrawerOverlay />
      <CreateBudgetDrawerContent />
    </Drawer>
  );
}
