import {
  Box,
  Button,
  DrawerFooter,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { ForwardArrowIcon } from "../../../icons";
import { useBudgetContext } from "../../../../context/budget-context";

type CreateBudgetDrawerFooterProps = {
  budgetAmount: string | number;
};

export function CreateBudgetDrawerFooter({
  budgetAmount,
}: CreateBudgetDrawerFooterProps) {
  const { dispatch } = useBudgetContext();

  const maxBudget = 999999;
  const isGreaterThanMax = Number(budgetAmount) > maxBudget;

  function createBudget() {
    const newBudget = {
      id: Math.floor(Math.random() * 100000000),
      amount: Number(budgetAmount),
    };

    dispatch({
      type: "create-budget",
      payload: newBudget,
    });

    dispatch({
      type: "update-create-budget-step",
      payload: "category",
    });
  }
  return (
    <DrawerFooter display="block" px="0">
      <Flex>
        <Text cursor="pointer" variant="body-1" as="u" color="brand.lightBlue4">
          Create from spending pattern
        </Text>
        <Spacer />
        <Box>
          <Button
            fontSize="1.6rem"
            fontWeight="400"
            color="brand.darkBlue"
            rightIcon={<ForwardArrowIcon />}
            bg="transparent"
            onClick={createBudget}
            isDisabled={!budgetAmount || isGreaterThanMax}
          >
            Next
          </Button>
        </Box>
      </Flex>
    </DrawerFooter>
  );
}
