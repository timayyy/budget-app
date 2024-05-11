import { Box, Button } from "@chakra-ui/react";
import { ForwardArrowIcon } from "../../../../icons";
import {
  useToggleCreateBudgetModal,
  useUpdateCreateBudgetStep,
} from "../../../../../hooks/use-create-budget-modal";

export function DoneButton() {
  const { closeCreateBudgetModal } = useToggleCreateBudgetModal();
  const { showBudgetForm } = useUpdateCreateBudgetStep();

  function handleDone() {
    showBudgetForm();
    closeCreateBudgetModal();
  }

  return (
    <Box>
      <Button
        fontSize="1.6rem"
        fontWeight="400"
        color="brand.darkBlue"
        rightIcon={<ForwardArrowIcon />}
        bg="transparent"
        onClick={handleDone}
      >
        Done
      </Button>
    </Box>
  );
}
