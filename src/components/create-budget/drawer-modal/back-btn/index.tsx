import { IconButton } from "@chakra-ui/react";
import { BackArrowIcon } from "../../../icons";
import { useBudgetContext } from "../../../../context/budget-context";

export function CreateBudgetBackButton() {
  const { state, dispatch } = useBudgetContext();

  const isCategoryCurrentStep = state.currentCreateBudgetStep === "category";
  const isBudgetCurrentStep = state.currentCreateBudgetStep === "budget";

  function closeCreateBudgetModal() {
    dispatch({
      type: "show-create-budget-modal",
      payload: false,
    });
  }

  function handleBackArrowClick() {
    if (isCategoryCurrentStep) {
      dispatch({
        type: "update-create-budget-step",
        payload: "budget",
      });
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
      disabled={isBudgetCurrentStep}
      onClick={handleBackArrowClick}
    />
  );
}
