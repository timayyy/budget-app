import { Box, HStack, Text, VStack, useMediaQuery } from "@chakra-ui/react";
import { NavLinksData } from "../../data/nav-items";

export function BottomNav() {
  const [isLargerThan360] = useMediaQuery("(min-width: 360px)");
  return (
    <Box
      px={isLargerThan360 ? "3rem" : "1rem"}
      pt="2.4rem"
      pb="1.8rem"
      position="fixed"
      bottom="0"
      left="0"
      w="100%"
      bg="white"
      shadow="lg"
      display={["block", null, null, "none"]}
    >
      <HStack
        spacing={isLargerThan360 ? "3rem" : "1rem"}
        justify="space-between"
      >
        {NavLinksData.map((nav) => (
          <VStack
            key={nav.label}
            cursor={nav.isActive ? "pointer" : "not-allowed"}
          >
            <Box color={nav.isActive ? "brand.darkBlue" : "brand.gray"}>
              {nav.icon}
            </Box>
            <Text
              fontWeight={nav.isActive ? "600" : "400"}
              variant="menu-button"
              color={nav.isActive ? "brand.darkBlue" : "brand.gray"}
            >
              {nav.label}
            </Text>
          </VStack>
        ))}
      </HStack>
    </Box>
  );
}
