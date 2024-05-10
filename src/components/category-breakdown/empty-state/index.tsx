import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useBudgetContext } from "../../../context/budget-context";

export function EmptyCategoriesState() {
  const { state, dispatch } = useBudgetContext();

  const hasBudgetButNoCategory =
    state.budget && state.budgetCategories.length < 1;

  function handleBtnClick() {
    dispatch({
      type: "show-create-budget-modal",
      payload: true,
    });
    if (hasBudgetButNoCategory) {
      dispatch({
        type: "update-create-budget-step",
        payload: "category",
      });
    }
  }
  return (
    <Alert
      status="info"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="2rem">
        No categories
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        <VStack mt="1rem">
          <Text fontSize="1.6ren" variant="body-1">
            Create a budget and add categories
          </Text>
          <Button
            // color="white.100"
            variant="solid"
            bg="brand.lightBlue"
            onClick={handleBtnClick}
          >
            {hasBudgetButNoCategory ? "Add categories" : "Create a budget"}
          </Button>
        </VStack>
      </AlertDescription>
    </Alert>
  );
}
