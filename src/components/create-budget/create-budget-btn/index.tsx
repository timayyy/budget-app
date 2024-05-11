import { Box, Flex, IconButton, Spacer, Text } from "@chakra-ui/react";
import { PlusIcon } from "../../icons";
import { useToggleCreateBudgetModal } from "../../../hooks/use-create-budget-modal";

export function CreateBudgetButton() {
  const { openCreateBudgetModal } = useToggleCreateBudgetModal();

  return (
    <Box width="100%" cursor="pointer" onClick={openCreateBudgetModal}>
      <Flex align="center" gap="2rem">
        <Text variant="sub-heading-1">Create a budget</Text>
        <Spacer />
        <IconButton
          isRound={true}
          variant="icon-btn-blue"
          aria-label="Add budget"
          icon={<PlusIcon height="1.2rem" width="1.2rem" />}
          size="lg"
          onClick={openCreateBudgetModal}
        />
      </Flex>
    </Box>
  );
}
