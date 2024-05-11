import { useMemo } from "react";
import { useBudgetContext } from "../context/budget-context";
import { useBudgetCategories } from "./use-budget-categories";

export function useBudget() {
  const { state } = useBudgetContext();

  const maxBudgetAmount = 999999;
  const hasBudget = !!state.budget;
  const budgetAmount = state.budget?.amount ?? 0;

  return { hasBudget, budgetAmount, maxBudgetAmount };
}

export function useTotalAmountSpent() {
  const { budgetCategories } = useBudgetCategories();

  const totalAmountSpent = useMemo(() => {
    return budgetCategories.reduce(
      (acc, item) => (acc += Number(item.amount)),
      0,
    );
  }, [budgetCategories]);

  return { totalAmountSpent };
}
