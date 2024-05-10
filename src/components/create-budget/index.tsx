import { Box } from "@chakra-ui/react";
import { CreateBudgetDrawer } from "./drawer-modal";
import { useBudgetContext } from "../../context/budget-context";
import {
  handleCreateBudgetButtonContent,
  openCreateBudgetModal,
} from "./actions";

export function CreateBudgetComponent() {
  const { state, dispatch } = useBudgetContext();

  return (
    <Box
      rounded="1rem"
      shadow="lg"
      px="2rem"
      h="5.1rem"
      display="flex"
      alignItems="center"
      cursor="pointer"
      onClick={() => openCreateBudgetModal(dispatch)}
    >
      {handleCreateBudgetButtonContent(state)}
      <CreateBudgetDrawer />
    </Box>
  );
}
