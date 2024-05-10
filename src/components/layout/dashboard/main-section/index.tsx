import { Box, Container } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export function MainSection({ children }: PropsWithChildren) {
  return (
    <Box as="main" h="100vh" position="relative">
      <Box h="100vh" px="2rem" pb="14rem" pt="2rem" overflow="scroll">
        <Container maxW="110.3rem">{children}</Container>
      </Box>
    </Box>
  );
}
