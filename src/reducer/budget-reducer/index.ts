import { CreateBudgeSteps } from "../../components/create-budget/drawer-modal";
import { categoryOptions } from "../../data/category-options";
import {
  BudgetActions,
  CategoryOptionSingle,
  CategorySingle,
  CreateBudgetPayload,
} from "./types";

export type BudgetState = {
  isCreateBudgetModalOpen: boolean;
  currentCreateBudgetStep: CreateBudgeSteps;
  budget: CreateBudgetPayload | null;
  budgetCategories: CategorySingle[];
  budgetCategoryOptions: CategoryOptionSingle[];
  showOverview: "expenses" | "categories";
};

export const initialBudgetState: BudgetState = {
  currentCreateBudgetStep: "budget",
  isCreateBudgetModalOpen: false,
  budget: null,
  budgetCategories: [],
  budgetCategoryOptions: categoryOptions,
  showOverview: "expenses",
};

export const budgetBookingReducer = (
  state: BudgetState = initialBudgetState,
  action: BudgetActions,
) => {
  if (action.type === "show-create-budget-modal") {
    return { ...state, isCreateBudgetModalOpen: action.payload };
  }
  if (action.type === "update-create-budget-step") {
    return { ...state, currentCreateBudgetStep: action.payload };
  }
  if (action.type === "create-budget") {
    const newCategories: CategorySingle[] = state.budgetCategories.map((x) => {
      return {
        amount: x.amount,
        color: x.color,
        icon: x.icon,
        id: x.id,
        name: x.name,
        percentage: Math.round(
          (Number(x.amount) / Number(action.payload.amount)) * 100,
        ),
        value: x.value,
      };
    });
    return {
      ...state,
      budget: action.payload,
      budgetCategories: newCategories,
    };
  }
  if (action.type === "show-overview") {
    return { ...state, showOverview: action.payload };
  }
  if (action.type === "add-category") {
    const newOptions = state.budgetCategoryOptions.filter(
      (cat) => cat.value !== action.payload.value,
    );
    return {
      ...state,
      budgetCategories: [...state.budgetCategories, action.payload],
      budgetCategoryOptions: [...newOptions],
    };
  }

  if (action.type === "delete-category") {
    const newCategories = state.budgetCategories.filter(
      (cat) => cat.value !== action.payload,
    );
    const newOption = categoryOptions.find(
      (cat) => cat.value === action.payload,
    );
    return {
      ...state,
      budgetCategories: newCategories,
      budgetCategoryOptions: newOption
        ? [newOption, ...state.budgetCategoryOptions]
        : state.budgetCategoryOptions,
    };
  }
  if (action.type === "reset-state") {
    return { ...initialBudgetState };
  }

  return state;
};
