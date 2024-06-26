import { Box, Text, VStack } from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useBudgetCategories } from "../../../hooks/use-budget-categories";
import { useBudget, useTotalAmountSpent } from "../../../hooks/use-budget";

ChartJS.register(ArcElement, Tooltip, Legend);

export function CategoryOverview() {
  const {
    budgetCategoriesLightHexColors,
    budgetCategoriesNames,
    budgetCategoriesPercentages,
    budgetCategoriesMainHexColors,
  } = useBudgetCategories();

  const { budgetAmount } = useBudget();
  const { totalAmountSpent } = useTotalAmountSpent();

  // Chart Data
  const data = {
    labels: budgetCategoriesNames,
    datasets: [
      {
        data: budgetCategoriesPercentages,
        backgroundColor: budgetCategoriesMainHexColors,
        borderColor: budgetCategoriesLightHexColors,
        borderWidth: 1,
      },
    ],
  };
  return (
    <Box>
      <VStack spacing="2.1rem">
        <Box
          bg="white"
          border="1rem"
          h="15rem"
          w="15rem"
          borderRadius="50%"
          borderColor="brand.lightBlue"
          borderStyle="solid"
        >
          <Doughnut
            data={data}
            options={{
              plugins: { legend: { display: false } },
              cutout: "85%",
            }}
          />
        </Box>
        <Box>
          <Text align="center" color="brand.gray" variant="body-1">
            Amount spent so far
          </Text>
          <Text align="center">
            <Text as={"span"} color="brand.darkBlue" variant="sub-heading-1">
              ₦{totalAmountSpent.toLocaleString()}
            </Text>
            <Text as={"span"} color="brand.lightBlue4" variant="sub-heading-1">
              /₦{budgetAmount.toLocaleString()}
            </Text>
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
