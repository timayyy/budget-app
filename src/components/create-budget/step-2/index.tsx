import { VStack, Box, DrawerBody } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { useBudgetContext } from "../../../context/budget-context";
import { CreateCategoryFooter } from "./footer";
import { calculatePercentage, calculatePercentageRemaining } from "./actions";
import { StepHeader } from "../step-1/header";
import { SelectedCategoryList } from "./selected-category-list";
import { AddCategoryComponent } from "./add-category";
import { AddCategoryForm } from "./form";

export function CreateBudgetStep2Body() {
  const { state } = useBudgetContext();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [amountValue, setAmountValue] = useState("");

  const totalBudgetAmount = Number(state.budget?.amount);
  const inputAmount = Number(amountValue);
  const totalPercentage = Number(
    state.budgetCategories
      .reduce((acc, item) => (acc += item.percentage), 0)
      .toFixed(1),
  );
  const isMoreThanBudget =
    calculatePercentage(inputAmount, totalBudgetAmount) >
    calculatePercentageRemaining(totalPercentage);

  const handleAmountValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmountValue(event.target.value);
  };

  function returnSelectedCategory() {
    if (selectedCategory) {
      return state.budgetCategoryOptions.find(
        (cat) => cat.value === selectedCategory,
      );
    }
  }

  return (
    <>
      <DrawerBody px="0">
        <Box>
          <VStack align="initial" spacing="2.4rem">
            <StepHeader subHeading="How much would you like to spend on each category this month?" />
            <AddCategoryForm
              amountValue={amountValue}
              handleAmountValueChange={handleAmountValueChange}
              isMoreThanBudget={isMoreThanBudget}
              returnSelectedCategory={returnSelectedCategory}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </VStack>
          <AddCategoryComponent
            amountValue={amountValue}
            isMoreThanBudget={isMoreThanBudget}
            returnSelectedCategory={returnSelectedCategory}
            selectedCategory={selectedCategory}
            setAmountValue={setAmountValue}
            setSelectedCategory={setSelectedCategory}
            totalBudgetAmount={totalBudgetAmount}
          />
          <SelectedCategoryList />
        </Box>
      </DrawerBody>
      <CreateCategoryFooter />
    </>
  );
}
