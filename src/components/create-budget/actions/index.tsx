import { BudgetValue } from "../budget-value";
import { BudgetState } from "../../../reducer/budget-reducer";
import { CreateBudgetButton } from "../create-budget-btn";

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
