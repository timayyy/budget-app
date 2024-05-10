import { CategorySingle } from "../../../reducer/budget-reducer/types";

export function calculateTotalAmountSpent(budgetCategories: CategorySingle[]) {
  const totalAmount = budgetCategories.reduce(
    (acc, item) => (acc += Number(item.amount)),
    0,
  );

  return totalAmount;
}

export function calculateTotalPercentageUsed(
  budgetCategories: CategorySingle[],
) {
  const totalPercentage = budgetCategories.reduce(
    (acc, item) => (acc += item.percentage),
    0,
  );
  return Math.round(totalPercentage);
}
