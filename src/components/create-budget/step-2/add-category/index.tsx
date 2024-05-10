import { Box, Flex, IconButton, Spacer, Text } from "@chakra-ui/react";
import { PlusIcon } from "../../../icons";
import { calculatePercentage } from "../actions";
import { CategoryOptionSingle } from "../../../../reducer/budget-reducer/types";
import { Dispatch, SetStateAction } from "react";
import { useBudgetContext } from "../../../../context/budget-context";

type AddCategoryComponentProps = {
  amountValue: string;
  selectedCategory: string;
  isMoreThanBudget: boolean;
  totalBudgetAmount: number;
  returnSelectedCategory: () => CategoryOptionSingle | undefined;
  setAmountValue: Dispatch<SetStateAction<string>>;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
};

export function AddCategoryComponent({
  amountValue,
  isMoreThanBudget,
  returnSelectedCategory,
  selectedCategory,
  setAmountValue,
  setSelectedCategory,
  totalBudgetAmount,
}: AddCategoryComponentProps) {
  const { state, dispatch } = useBudgetContext();

  const disableBtn = !amountValue || !selectedCategory || isMoreThanBudget;
  const inputAmount = Number(amountValue);

  function addNewCategory() {
    if (amountValue && selectedCategory) {
      const foundCat = returnSelectedCategory();
      if (foundCat) {
        const newCat = {
          ...foundCat,
          amount: amountValue,
          percentage: calculatePercentage(inputAmount, totalBudgetAmount),
          id: Math.floor(Math.random() * 100000000),
        };
        dispatch({
          payload: newCat,
          type: "add-category",
        });
      }
      setAmountValue("");
      setSelectedCategory("");
    }
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
              % of budget: {calculatePercentage(inputAmount, totalBudgetAmount)}
              %
            </Text>
            <Spacer />{" "}
            <IconButton
              isRound={true}
              variant="icon-btn-blue"
              aria-label="Add budget"
              icon={<PlusIcon height="1.2rem" width="1.2rem" />}
              size="lg"
              isDisabled={disableBtn}
              onClick={addNewCategory}
            />
          </Flex>
        </Box>
      ) : state.budgetCategories.length > 0 ? (
        <Box mt="3rem">
          <Flex justifyContent="end">
            <IconButton
              isRound={true}
              variant="icon-btn-blue"
              aria-label="Add budget"
              icon={<PlusIcon height="1.2rem" width="1.2rem" />}
              size="lg"
              isDisabled={disableBtn}
              onClick={addNewCategory}
            />
          </Flex>
        </Box>
      ) : null}
    </>
  );
}
