import { Tab } from "../components/usage/types";

export const tabs: Tab[] = [
  {
    name: "Last Month",
    activeState: "lastMonth",
    isDisabled: true,
  },
  {
    name: "This Month",
    activeState: "thisMonth",
    isDisabled: false,
  },
];
