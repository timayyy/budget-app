import { Dispatch, PropsWithChildren, useReducer } from "react";
import { createContext } from "../create-context";
import {
  budgetBookingReducer,
  initialBudgetState,
} from "../../reducer/budget-reducer";
import type { BudgetActions } from "../../reducer/budget-reducer/types";

type TBudgetContextState = {
  state: typeof initialBudgetState;
  dispatch: Dispatch<BudgetActions>;
};

const [useContext, ContextProvider] = createContext<TBudgetContextState>();

export const useBudgetContext = useContext;

export const BudgetProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(
    budgetBookingReducer,
    initialBudgetState,
  );

  return (
    <ContextProvider value={{ state, dispatch }}>{children}</ContextProvider>
  );
};
