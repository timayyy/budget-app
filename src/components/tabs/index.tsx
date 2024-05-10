import { Box, HStack } from "@chakra-ui/react";
import { Tab as TabComponent } from "./tab";
import { Dispatch, SetStateAction } from "react";
import type { ActiveTab, Tab } from "../usage/types";

type TabsProps = {
  activeTab: ActiveTab;
  tabs: Tab[];
  setActiveTab: Dispatch<SetStateAction<ActiveTab>>;
};
export function Tabs({ activeTab, tabs, setActiveTab }: TabsProps) {
  return (
    <HStack spacing="3rem">
      {tabs.map((tab) => (
        <Box
          key={tab.name}
          onClick={() => {
            if (tab.isDisabled) {
              return;
            } else {
              setActiveTab(tab.activeState);
            }
          }}
        >
          <TabComponent
            isDisabled={tab.isDisabled}
            active={activeTab === tab.activeState}
            name={tab.name}
          />
        </Box>
      ))}
    </HStack>
  );
}
