export type ActiveTab = "lastMonth" | "thisMonth";
export type Tab = {
  name: string;
  activeState: ActiveTab;
  isDisabled: boolean;
};
