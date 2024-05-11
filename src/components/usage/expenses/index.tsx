import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useBudget, useTotalAmountSpent } from "../../../hooks/use-budget";
import { usePercentageRemaining } from "../../../hooks/use-percentage-util";

export function Expenses() {
  const { budgetAmount } = useBudget();
  const { totalAmountSpent } = useTotalAmountSpent();
  const { totalPercentage } = usePercentageRemaining();

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
            value={totalPercentage}
            size="13.2rem"
            trackColor="transparent"
            thickness="5px"
            color="brand.darkBlue"
          >
            <CircularProgressLabel>
              <Text color="brand.darkBlue" fontSize="3.6ren" fontWeight="700">
                {totalPercentage}%
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
              ₦{totalAmountSpent.toLocaleString()}
            </Text>
            <Text as={"span"} color="brand.lightBlue4" variant="sub-heading-1">
              /₦{budgetAmount.toLocaleString()}
            </Text>
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
