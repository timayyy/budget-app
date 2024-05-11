import { useBudgetContext } from "../context/budget-context";

export function useOverview() {
  const { dispatch } = useBudgetContext();

  function showExpensesOverview() {
    dispatch({
      type: "show-overview",
      payload: "expenses",
    });
  }
  function showCategoriesOverview() {
    dispatch({
      type: "show-overview",
      payload: "categories",
    });
  }

  return { showExpensesOverview, showCategoriesOverview };
}
