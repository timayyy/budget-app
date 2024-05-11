import { useState } from "react";
import { useBudgetContext } from "../context/budget-context";
import { useBudget } from "./use-budget";

export function useCurrentCreateBudgetStep() {
  const { state } = useBudgetContext();

  const currentCreateBudgetStep = state.currentCreateBudgetStep;
  const isCategoryCurrentStep = state.currentCreateBudgetStep === "category";
  const isBudgetCurrentStep = state.currentCreateBudgetStep === "budget";

  return {
    currentCreateBudgetStep,
    isCategoryCurrentStep,
    isBudgetCurrentStep,
  };
}

export function useUpdateCreateBudgetStep() {
  const { dispatch } = useBudgetContext();

  function showBudgetForm() {
    dispatch({
      type: "update-create-budget-step",
      payload: "budget",
    });
  }

  function showCategoryForm() {
    dispatch({
      type: "update-create-budget-step",
      payload: "category",
    });
  }

  return { showBudgetForm, showCategoryForm };
}

export function useCreateBudgetForm() {
  const { budgetAmount: totalBudgetAmount, hasBudget } = useBudget();

  const [formBudgetAmount, setFormBudgetAmount] = useState(
    hasBudget ? totalBudgetAmount : "",
  );

  return { formBudgetAmount, setFormBudgetAmount };
}

export function useToggleCreateBudgetModal() {
  const { state, dispatch } = useBudgetContext();

  const isCreateBudgetModalOpen = state.isCreateBudgetModalOpen;

  function openCreateBudgetModal() {
    dispatch({
      type: "show-create-budget-modal",
      payload: true,
    });
  }

  function closeCreateBudgetModal() {
    dispatch({
      type: "show-create-budget-modal",
      payload: false,
    });
  }

  return {
    openCreateBudgetModal,
    closeCreateBudgetModal,
    isCreateBudgetModalOpen,
  };
}

export function useCreateBudget(formBudgetAmount: string | number) {
  const { dispatch } = useBudgetContext();
  const { budgetAmount } = useBudget();
  const { showCategoryForm } = useUpdateCreateBudgetStep();

  const userInputBudgetAmount = Number(formBudgetAmount);

  function createBudget() {
    showCategoryForm();

    if (budgetAmount !== userInputBudgetAmount) {
      const newBudget = {
        id: Math.floor(Math.random() * 100000000),
        amount: userInputBudgetAmount,
      };

      dispatch({
        type: "create-budget",
        payload: newBudget,
      });
    }
  }

  return { createBudget };
}
