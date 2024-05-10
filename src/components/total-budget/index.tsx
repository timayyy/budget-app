import { Box, Circle, Flex, HStack, Text } from "@chakra-ui/react";
import { CreateBudgetComponent } from "../create-budget";
import { NairaIcon } from "../icons";

export function TotalBudget() {
  return (
    <Box>
      <Flex
        gap="1rem"
        align={["initial", "center"]}
        direction={["column", "row"]}
        justifyContent={["initial", "space-between"]}
      >
        <Box>
          <HStack spacing="1rem">
            <Circle size="2rem" bg="brand.lightBlue" color="brand.darkBlue">
              <NairaIcon />
            </Circle>
            <Text variant="body-1" color="brand.gray">
              Monthly Budget
            </Text>
          </HStack>
        </Box>
        <CreateBudgetComponent />
      </Flex>
    </Box>
  );
}
