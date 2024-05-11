import {
  Box,
  Button,
  DrawerFooter,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { ForwardArrowIcon } from "../../../icons";
import { useBudget } from "../../../../hooks/use-budget";
import { useCreateBudget } from "../../../../hooks/use-create-budget-modal";

type CreateBudgetDrawerFooterProps = {
  formBudgetAmount: string | number;
};

export function CreateBudgetDrawerFooter({
  formBudgetAmount,
}: CreateBudgetDrawerFooterProps) {
  const { maxBudgetAmount } = useBudget();
  const { createBudget } = useCreateBudget(formBudgetAmount);

  const isGreaterThanMax = Number(formBudgetAmount) > maxBudgetAmount;
  const disableBtn = !formBudgetAmount || isGreaterThanMax;

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
            isDisabled={disableBtn}
          >
            Next
          </Button>
        </Box>
      </Flex>
    </DrawerFooter>
  );
}
