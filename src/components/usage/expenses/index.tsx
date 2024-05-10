import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useBudgetContext } from "../../../context/budget-context";
import {
  calculateTotalAmountSpent,
  calculateTotalPercentageUsed,
} from "../actions";

export function Expenses() {
  const { state } = useBudgetContext();
  return (
    <Box>
      <VStack spacing="2.1rem">
        <Box
          bg="white"
          border="1rem"
          h="15rem"
          w="15rem"
          borderRadius="50%"
          borderColor="brand.lightBlue"
          borderStyle="solid"
        >
          <CircularProgress
            value={calculateTotalPercentageUsed(state.budgetCategories)}
            size="13.2rem"
            trackColor="transparent"
            thickness="5px"
            color="brand.darkBlue"
          >
            <CircularProgressLabel>
              <Text color="brand.darkBlue" fontSize="3.6ren" fontWeight="700">
                {calculateTotalPercentageUsed(state.budgetCategories)}%
              </Text>
            </CircularProgressLabel>
          </CircularProgress>
        </Box>
        <Box>
          <Text align="center" color="brand.gray" variant="body-1">
            Amount spent so far
          </Text>
          <Text align="center">
            <Text as={"span"} color="brand.darkBlue" variant="sub-heading-1">
              ₦
              {calculateTotalAmountSpent(
                state.budgetCategories,
              ).toLocaleString()}
            </Text>
            <Text as={"span"} color="brand.lightBlue4" variant="sub-heading-1">
              /₦{state.budget?.amount.toLocaleString()}
            </Text>
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
