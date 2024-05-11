import { Box, FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { useBudget } from "../../../../hooks/use-budget";
import { Dispatch, SetStateAction } from "react";

type CreateBudgetFormProps = {
  formBudgetAmount: string | number;
  setFormBudgetAmount: Dispatch<SetStateAction<string | number>>;
};

export function CreateBudgetForm({
  formBudgetAmount,
  setFormBudgetAmount,
}: CreateBudgetFormProps) {
  const { maxBudgetAmount } = useBudget();

  const isGreaterThanMax = Number(formBudgetAmount) > maxBudgetAmount;

  return (
    <Box>
      <FormControl isInvalid={isGreaterThanMax}>
        <Input
          type="number"
          value={formBudgetAmount}
          onChange={(e) => setFormBudgetAmount(e.target.value)}
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
            You can't go higher than {maxBudgetAmount.toLocaleString()}!
          </FormErrorMessage>
        )}
      </FormControl>
    </Box>
  );
}
