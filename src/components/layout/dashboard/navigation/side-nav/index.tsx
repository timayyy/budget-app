import { Box } from "@chakra-ui/react";
import { NavItemGroup } from "../nav-item-group";

export function SideNav() {
  return (
    <Box
      as="aside"
      shadow="lg"
      bg="white"
      h="100vh"
      overflow="auto"
      transitionProperty="width, transform"
      transitionDuration="0.3s"
      transitionTimingFunction="cubic-bezier(0.4, 0, 1, 1)"
      pt={["7rem", null, null, "2rem"]}
      zIndex={[90, null, null, "initial"]}
      position={["fixed", null, null, "relative"]}
      w={["23.1rem", null, null, "100%"]}
      transform={[
        `translate3d(calc(23.1rem - 23.1rem*2),0,0)`,
        null,
        null,
        "initial",
      ]}
      transition={[
        `transform 0.3s cubic-bezier(0, 0, 0.2, 1)`,
        null,
        null,
        "initial",
      ]}
    >
      <NavItemGroup />
    </Box>
  );
}
