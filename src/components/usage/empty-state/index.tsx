import { Box, Image, Text, VStack } from "@chakra-ui/react";
import NoBudgetImg from "../../../assets/no-budget.png";

export function EmptyState() {
  return (
    <VStack spacing="2.1rem">
      <Image src={NoBudgetImg} alt="No budget" />
      <Box maxW="18rem">
        <Text align="center" color="brand.gray" variant="body-1">
          You haven’t created a budget for this month yet
        </Text>
      </Box>
    </VStack>
  );
}
