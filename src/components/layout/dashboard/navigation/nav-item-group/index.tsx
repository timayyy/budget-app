import { Flex } from "@chakra-ui/react";
import { NavLinksData } from "../../../../../data/nav-items";
import { NavItemComponent } from "../nav-item";

export function NavItemGroup() {
  return (
    <Flex
      pb="2rem"
      direction="column"
      grow={["1", null, null, "0"]}
      mr="2px"
      overflow="hidden"
      overflowY="auto"
      bg="rgba(250, 250, 250, 0.1)"
      transition="flex-grow 0.3s cubic-bezier(0.4, 0, 1, 1)"
      __css={{
        "&::-webkit-scrollbar": {
          w: "4px",
        },
        "&::-webkit-scrollbar-track": {
          bg: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          bg: "brand.gray",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          bg: " rgba(255, 255, 255, 0.5)",
        },
      }}
    >
      {NavLinksData.map((nav) => (
        <NavItemComponent navItem={nav} key={nav.label} />
      ))}
    </Flex>
  );
}
