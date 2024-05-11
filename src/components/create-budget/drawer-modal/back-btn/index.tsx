import { IconButton } from "@chakra-ui/react";
import { BackArrowIcon } from "../../../icons";
import {
  useCurrentCreateBudgetStep,
  useToggleCreateBudgetModal,
  useUpdateCreateBudgetStep,
} from "../../../../hooks/use-create-budget-modal";

export function CreateBudgetBackButton() {
  const { closeCreateBudgetModal } = useToggleCreateBudgetModal();
  const { showBudgetForm } = useUpdateCreateBudgetStep();
  const { isCategoryCurrentStep } = useCurrentCreateBudgetStep();

  function handleBackArrowClick() {
    if (isCategoryCurrentStep) {
      showBudgetForm();
    } else {
      closeCreateBudgetModal();
    }
  }

  return (
    <IconButton
      icon={<BackArrowIcon />}
      size="lg"
      aria-label="Go back"
      bg="transparent"
      onClick={handleBackArrowClick}
    />
  );
}
