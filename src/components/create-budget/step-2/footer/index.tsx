import { DrawerFooter, Flex, Spacer } from "@chakra-ui/react";
import { BudgetRemainder } from "./budget-remainder";
import { DoneButton } from "./done-btn";

export function CreateCategoryFooter() {
  return (
    <DrawerFooter display="block" px="0">
      <Flex align="center">
        <BudgetRemainder />
        <Spacer />
        <DoneButton />
      </Flex>
    </DrawerFooter>
  );
}
