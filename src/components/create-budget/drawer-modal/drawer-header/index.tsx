import { DrawerHeader, Flex, Spacer } from "@chakra-ui/react";
import { CreateBudgetBackButton } from "../back-btn";
import { StepCount } from "../step-count";

export function CreateBudgetDrawerHeader() {
  return (
    <DrawerHeader px="0">
      <Flex>
        <CreateBudgetBackButton />
        <Spacer />
        <StepCount />
      </Flex>
    </DrawerHeader>
  );
}
