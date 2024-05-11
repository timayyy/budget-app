import { Box, Flex, IconButton, Spacer, Text } from "@chakra-ui/react";
import { PlusIcon } from "../../../icons";
import { Dispatch, SetStateAction } from "react";
import {
  useAddCategory,
  useBudgetCategories,
} from "../../../../hooks/use-budget-categories";
import { usePercentageUtil } from "../../../../hooks/use-percentage-util";

type AddCategoryComponentProps = {
  amountValue: string;
  selectedCategory: string;
  setAmountValue: Dispatch<SetStateAction<string>>;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
};

export function AddCategoryComponent({
  amountValue,
  selectedCategory,
  setAmountValue,
  setSelectedCategory,
}: AddCategoryComponentProps) {
  const inputAmount = Number(amountValue);

  const { budgetCategoriesLength } = useBudgetCategories();
  const { isMoreThanBudget, categoryPercentage } =
    usePercentageUtil(inputAmount);
  const { addNewCategory } = useAddCategory(selectedCategory, inputAmount);

  const disableBtn = !amountValue || !selectedCategory || isMoreThanBudget;

  function addNewBudgetCategory() {
    addNewCategory();
    setAmountValue("");
    setSelectedCategory("");
  }

  return (
    <>
      {amountValue && selectedCategory ? (
        <Box mt="3rem">
          <Flex>
            <Text
              variant="body-1"
              color={isMoreThanBudget ? "red" : "brand.darkBlue"}
            >
              % of budget: {categoryPercentage.toFixed(1)}%
            </Text>
            <Spacer />{" "}
            <IconButton
              isRound={true}
              variant="icon-btn-blue"
              aria-label="Add budget"
              icon={<PlusIcon height="1.2rem" width="1.2rem" />}
              size="lg"
              isDisabled={disableBtn}
              onClick={addNewBudgetCategory}
            />
          </Flex>
        </Box>
      ) : budgetCategoriesLength > 0 ? (
        <Box mt="3rem">
          <Flex justifyContent="end">
            <IconButton
              isRound={true}
              variant="icon-btn-blue"
              aria-label="Add budget"
              icon={<PlusIcon height="1.2rem" width="1.2rem" />}
              size="lg"
              isDisabled={disableBtn}
              onClick={addNewBudgetCategory}
            />
          </Flex>
        </Box>
      ) : null}
    </>
  );
}
