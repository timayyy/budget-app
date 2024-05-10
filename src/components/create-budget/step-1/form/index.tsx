import { Box, FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

type CreateBudgetFormProps = {
  budgetAmount: string | number;
  setBudgetAmount: Dispatch<SetStateAction<string | number>>;
};

export function CreateBudgetForm({
  budgetAmount,
  setBudgetAmount,
}: CreateBudgetFormProps) {
  const maxBudget = 999999;
  const isGreaterThanMax = Number(budgetAmount) > maxBudget;
  return (
    <Box>
      <FormControl isInvalid={isGreaterThanMax}>
        <Input
          type="number"
          value={budgetAmount}
          onChange={(e) => setBudgetAmount(e.target.value)}
          variant="flushed"
          color="brand.main"
          fontSize="1.4rem"
          fontWeight="500"
          placeholder="Amount (in ₦)"
          borderBottomColor="brand.gray3"
          _placeholder={{
            color: "brand.gray3",
            fontSize: "1.4rem",
            fontWeight: 500,
          }}
          isInvalid={isGreaterThanMax}
        />
        {isGreaterThanMax && (
          <FormErrorMessage>
            You can't go higher than {maxBudget.toLocaleString()}!
          </FormErrorMessage>
        )}
      </FormControl>
    </Box>
  );
}
