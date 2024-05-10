import { Box, HStack, Text } from "@chakra-ui/react";
import type { NavItem } from "../../../../../data/nav-items";

type NavItemComponentProps = {
  navItem: NavItem;
};
export function NavItemComponent({ navItem }: NavItemComponentProps) {
  const navColor = navItem.isActive ? "brand.darkBlue" : "brand.main";

  return (
    <Box
      key={navItem.label}
      position="relative"
      cursor="pointer"
      bg={navItem.isActive ? "rgba(217, 217, 217, 0.15)" : ""}
      _before={{
        content: '""',
        position: "absolute",
        height: "100%",
        width: "5px",
        backgroundColor: "rgba(217, 217, 217, 0.15)",
        transform: "scaleY(0)",
        transition: "transform 0.1s, width 0.2s cubic-bezier(1, 0, 0, 1) 0.1s",
      }}
      _hover={{
        _before: {
          transform: "scaleY(1)",
          width: "100%",
        },
      }}
    >
      <HStack
        align="center"
        h="3.9rem"
        px="1.7rem"
        zIndex="10"
        spacing="1rem"
        position="relative"
        color={navColor}
        role="group"
      >
        <Box
          _groupHover={{
            color: "brand.darkBlue",
          }}
        >
          {navItem.icon}
        </Box>
        <Text
          _groupHover={{
            fontWeight: 600,
            color: "brand.darkBlue",
          }}
          color={navColor}
          fontWeight={navItem.isActive ? "600" : "400"}
          variant="menu-button"
        >
          {navItem.label}
        </Text>
      </HStack>
    </Box>
  );
}
