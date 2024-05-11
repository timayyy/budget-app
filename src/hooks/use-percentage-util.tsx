import { useMemo } from "react";
import { useBudget } from "./use-budget";
import { useBudgetCategories } from "./use-budget-categories";

export function usePercentageUtil(inputAmount: number) {
  const { budgetAmount } = useBudget();
  const { percentageRemaining } = usePercentageRemaining();

  const categoryPercentage = (inputAmount / budgetAmount) * 100;
  const isMoreThanBudget = categoryPercentage > percentageRemaining;

  return {
    categoryPercentage,
    isMoreThanBudget,
  };
}

export function usePercentageRemaining() {
  const { budgetCategories } = useBudgetCategories();

  const totalPercentage = useMemo(() => {
    return budgetCategories.reduce((acc, item) => (acc += item.percentage), 0);
  }, [budgetCategories]);

  const percentageRemaining = 100 - totalPercentage;

  return {
    totalPercentage,
    percentageRemaining,
  };
}
