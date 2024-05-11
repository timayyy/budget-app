import { VStack, Box, DrawerBody } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { CreateCategoryFooter } from "./footer";
import { StepHeader } from "../step-1/header";
import { SelectedCategoryList } from "./selected-category-list";
import { AddCategoryComponent } from "./add-category";
import { AddCategoryForm } from "./form";

export function CreateBudgetStep2Body() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [amountValue, setAmountValue] = useState("");

  const handleAmountValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmountValue(event.target.value);
  };

  return (
    <>
      <DrawerBody px="0">
        <Box>
          <VStack align="initial" spacing="2.4rem">
            <StepHeader subHeading="How much would you like to spend on each category this month?" />
            <AddCategoryForm
              amountValue={amountValue}
              handleAmountValueChange={handleAmountValueChange}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </VStack>
          <AddCategoryComponent
            amountValue={amountValue}
            selectedCategory={selectedCategory}
            setAmountValue={setAmountValue}
            setSelectedCategory={setSelectedCategory}
          />
          <SelectedCategoryList />
        </Box>
      </DrawerBody>
      <CreateCategoryFooter />
    </>
  );
}
