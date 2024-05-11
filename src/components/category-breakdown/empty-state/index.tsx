import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useBudgetCategories } from "../../../hooks/use-budget-categories";
import { useBudget } from "../../../hooks/use-budget";
import {
  useToggleCreateBudgetModal,
  useUpdateCreateBudgetStep,
} from "../../../hooks/use-create-budget-modal";

export function EmptyCategoriesState() {
  const { budgetCategoriesLength } = useBudgetCategories();
  const { hasBudget } = useBudget();
  const { openCreateBudgetModal } = useToggleCreateBudgetModal();
  const { showCategoryForm } = useUpdateCreateBudgetStep();

  const hasBudgetButNoCategory = hasBudget && budgetCategoriesLength < 1;

  function handleBtnClick() {
    openCreateBudgetModal();
    if (hasBudgetButNoCategory) {
      showCategoryForm();
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
