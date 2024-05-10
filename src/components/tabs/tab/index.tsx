import { Box, Text } from "@chakra-ui/react";

type TabProps = {
  active?: boolean;
  isDisabled?: boolean;
  name: string;
};

export function Tab({ active, name, isDisabled }: TabProps) {
  const tabColor = active ? "brand.darkBlue" : "brand.gray";
  const borderStyles = {
    h: active ? "2px" : 0,
    bg: "brand.darkBlue",
    w: active ? "3rem" : 0,
  };
  return (
    <Box cursor={isDisabled ? "not-allowed" : "pointer"}>
      <Text variant="sub-heading-1" color={tabColor}>
        {name}
      </Text>
      <Box {...borderStyles} />
    </Box>
  );
}
