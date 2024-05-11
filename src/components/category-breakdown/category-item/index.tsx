import {
  Flex,
  HStack,
  CircularProgress,
  CircularProgressLabel,
  VStack,
  Spacer,
  Box,
  Text,
} from "@chakra-ui/react";
import type { CategorySingle } from "../../../reducer/budget-reducer/types";

type CategoryBreakdownItemProps = {
  category: CategorySingle;
};

export function CategoryBreakdownItem({
  category,
}: CategoryBreakdownItemProps) {
  return (
    <Flex py="1rem" align="center" key={category.value}>
      <HStack spacing="1rem" align="center">
        <Box bg={category.color.light} borderRadius="full">
          <CircularProgress
            value={Number(category.percentage.toFixed(1))}
            size="5rem"
            thickness="4px"
            color={category.color.main}
            trackColor="transparent"
          >
            <CircularProgressLabel>{category.icon}</CircularProgressLabel>
          </CircularProgress>
        </Box>
        <VStack spacing=".5rem" align="initial">
          <Text variant="heading-2" color="brand.main">
            {category.name}
          </Text>
          <Text variant="body-1" color="brand.gray">
            {category.percentage}%
          </Text>
        </VStack>
      </HStack>
      <Spacer />
      <Box>
        <Text variant="sub-heading-1" color="brand.main">
          ₦{Number(category.amount).toLocaleString()}
        </Text>
      </Box>
    </Flex>
  );
}
