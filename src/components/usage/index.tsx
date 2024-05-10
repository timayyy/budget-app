import { Box, Center, Flex, Spacer } from "@chakra-ui/react";
import { Tabs } from "../tabs";
import { useState } from "react";
import { useBudgetContext } from "../../context/budget-context";
import { EmptyState } from "./empty-state";
import { Expenses } from "./expenses";
import { CategoryOverview } from "./categories";
import { OverviewMenu } from "./overview-menu";
import { ActiveTab } from "./types";
import { tabs } from "../../data/tabs";

export function Usage() {
  const { state } = useBudgetContext();
  const [activeTab, setActiveTab] = useState<ActiveTab>("thisMonth");

  function handleView() {
    let content;
    switch (state.showOverview) {
      case "categories":
        content = <CategoryOverview />;
        break;
      default:
      case "expenses":
        content = <Expenses />;
    }
    return content;
  }
  return (
    <Box>
      {/* TABS */}
      <Flex align="center">
        <Tabs activeTab={activeTab} tabs={tabs} setActiveTab={setActiveTab} />
        <Spacer />
        <OverviewMenu />
      </Flex>
      {/* TABS CONTENT */}
      <Box py="3rem">
        <Center>{state.budget ? handleView() : <EmptyState />}</Center>
      </Box>
    </Box>
  );
}
