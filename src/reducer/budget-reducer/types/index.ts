import { CreateBudgeSteps } from "../../../components/create-budget/drawer-modal";

export type CreateBudgetPayload = {
  id: number;
  amount: number;
};

export type CategorySingle = {
  id: number;
  value: string;
  name: string;
  color: {
    main: string;
    light: string;
    mainHex: string;
    lightHex: string;
  };
  icon: React.ReactNode;
  amount: string;
  percentage: number;
};
export type CategoryOptionSingle = Omit<
  CategorySingle,
  "id" | "amount" | "percentage"
>;

export type ShowCreateBudgetModal = {
  type: "show-create-budget-modal";
  payload: boolean;
};

export type UpdateCreateBudgetStep = {
  type: "update-create-budget-step";
  payload: CreateBudgeSteps;
};
export type CreateBudget = {
  type: "create-budget";
  payload: CreateBudgetPayload;
};

export type AddCategory = {
  type: "add-category";
  payload: CategorySingle;
};

export type DeleteCategory = {
  type: "delete-category";
  payload: string;
};

export type ShowOverview = {
  type: "show-overview";
  payload: "expenses" | "categories";
};

export type ResetState = {
  type: "reset-state";
};

export type BudgetActions =
  | ShowCreateBudgetModal
  | UpdateCreateBudgetStep
  | CreateBudget
  | AddCategory
  | DeleteCategory
  | ShowOverview
  | ResetState;
