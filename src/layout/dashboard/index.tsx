import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { MainSection } from "../../components/layout/dashboard/main-section";
import { SideNav } from "../../components/layout/dashboard/navigation/side-nav";
import { BottomNav } from "../../components/bottom-nav";

export function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <Box
      gridTemplateColumns="23.1rem 1fr"
      gridTemplateRows="minmax(0,100vh) auto"
      w="100%"
      display={["block", null, null, "grid"]}
    >
      {/* SIDE NAVIGATION */}
      <SideNav />

      {/* MAIN CONTENT WRAPPER */}
      <MainSection>{children}</MainSection>

      {/* BOTTOM NAVIGATION */}
      <BottomNav />
    </Box>
  );
}
