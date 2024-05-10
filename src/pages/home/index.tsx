import { Box } from "@chakra-ui/react";
import { Header } from "../../components/header";
import { TotalBudget } from "../../components/total-budget";
import { Usage } from "../../components/usage";
import { CategoryBreakdown } from "../../components/category-breakdown";
import { DashboardLayout } from "../../layout/dashboard";

export function HomePage() {
  return (
    <DashboardLayout>
      <Box>
        <Header />
        <Box mt="2.8rem">
          <TotalBudget />
        </Box>
        <Box mt="3rem">
          <Usage />
        </Box>
        <Box mt="4.4rem">
          <CategoryBreakdown />
        </Box>
      </Box>
    </DashboardLayout>
  );
}
