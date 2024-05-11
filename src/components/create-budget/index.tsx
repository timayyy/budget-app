import { Box } from "@chakra-ui/react";
import { CreateBudgetDrawer } from "./drawer-modal";
import { useBudgetContext } from "../../context/budget-context";
import { handleCreateBudgetButtonContent } from "./actions";
import { useToggleCreateBudgetModal } from "../../hooks/use-create-budget-modal";

export function CreateBudgetComponent() {
  const { state } = useBudgetContext();
  const { openCreateBudgetModal } = useToggleCreateBudgetModal();

  return (
    <Box
      rounded="1rem"
      shadow="lg"
      px="2rem"
      h="5.1rem"
      display="flex"
      alignItems="center"
      cursor="pointer"
      onClick={openCreateBudgetModal}
    >
      {handleCreateBudgetButtonContent(state)}
      <CreateBudgetDrawer />
    </Box>
  );
}
