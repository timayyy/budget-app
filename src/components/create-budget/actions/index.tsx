import { Dispatch } from "react";
import { BudgetActions } from "../../../reducer/budget-reducer/types";
import { BudgetValue } from "../budget-value";
import { BudgetState } from "../../../reducer/budget-reducer";
import { CreateBudgetButton } from "../create-budget-btn";

export function openCreateBudgetModal(dispatch: Dispatch<BudgetActions>) {
  dispatch({
    type: "show-create-budget-modal",
    payload: true,
  });
}

export function handleCreateBudgetButtonContent(state: BudgetState) {
  let content;
  switch (!!state.budget) {
    case true:
      content = <BudgetValue />;
      break;
    default:
    case false:
      content = <CreateBudgetButton />;
  }
  return content;
}
