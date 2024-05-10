import { Box, Button } from "@chakra-ui/react";
import { ForwardArrowIcon } from "../../../../icons";
import { useBudgetContext } from "../../../../../context/budget-context";

export function DoneButton() {
  const { dispatch } = useBudgetContext();

  function handleDone() {
    dispatch({
      type: "update-create-budget-step",
      payload: "budget",
    });
    dispatch({
      type: "show-create-budget-modal",
      payload: false,
    });
  }

  return (
    <Box>
      <Button
        fontSize="1.6rem"
        fontWeight="400"
        color="brand.darkBlue"
        rightIcon={<ForwardArrowIcon />}
        bg="transparent"
        onClick={handleDone}
      >
        Done
      </Button>
    </Box>
  );
}
