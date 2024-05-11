import { useMemo } from "react";
import { useBudgetContext } from "../context/budget-context";
import { usePercentageUtil } from "./use-percentage-util";

export function useBudgetCategories() {
  const { state } = useBudgetContext();
  const budgetCategories = state.budgetCategories;
  const budgetCategoriesLength = state.budgetCategories.length;

  const budgetCategoriesPercentages = useMemo(() => {
    return budgetCategories.map((category) => category.percentage);
  }, [budgetCategories]);

  const budgetCategoriesNames = useMemo(() => {
    return budgetCategories.map((category) => category.name);
  }, [budgetCategories]);

  const budgetCategoriesMainHexColors = useMemo(() => {
    return budgetCategories.map((category) => category.color.mainHex);
  }, [budgetCategories]);

  const budgetCategoriesLightHexColors = useMemo(() => {
    return budgetCategories.map((category) => category.color.lightHex);
  }, [budgetCategories]);

  return {
    budgetCategories,
    budgetCategoriesLength,
    budgetCategoriesPercentages,
    budgetCategoriesNames,
    budgetCategoriesMainHexColors,
    budgetCategoriesLightHexColors,
  };
}
export function useBudgetCategoryOptions(selectedCategory: string) {
  const { state } = useBudgetContext();

  const budgetCategoryOptions = state.budgetCategoryOptions;

  const selectedCategoryOption = useMemo(() => {
    return budgetCategoryOptions.find(
      (option) => option.value === selectedCategory,
    );
  }, [selectedCategory, budgetCategoryOptions]);

  return { budgetCategoryOptions, selectedCategoryOption };
}
export function useAddCategory(selectedCategory: string, inputAmount: number) {
  const { dispatch } = useBudgetContext();

  const { categoryPercentage } = usePercentageUtil(inputAmount);
  const { selectedCategoryOption } = useBudgetCategoryOptions(selectedCategory);

  function addNewCategory() {
    if (!!inputAmount && !!selectedCategory) {
      if (selectedCategoryOption) {
        const newCat = {
          ...selectedCategoryOption,
          amount: inputAmount.toString(),
          percentage: Number(categoryPercentage.toFixed(1)),
          id: Math.floor(Math.random() * 100000000),
        };
        dispatch({
          payload: newCat,
          type: "add-category",
        });
      }
    }
  }

  return { addNewCategory };
}
export function useDeleteCategory(value: string) {
  const { dispatch } = useBudgetContext();

  function deleteCategory() {
    dispatch({
      type: "delete-category",
      payload: value,
    });
  }

  return { deleteCategory };
}
