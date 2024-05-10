import { Box, Text, VStack } from "@chakra-ui/react";
import { useBudgetContext } from "../../../context/budget-context";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { calculateTotalAmountSpent } from "../actions";

ChartJS.register(ArcElement, Tooltip, Legend);

export function CategoryOverview() {
  const { state } = useBudgetContext();

  // Chart Data
  const data = {
    labels: state.budgetCategories.map((category) => category.name),
    datasets: [
      {
        // label: "# of Votes",
        data: state.budgetCategories.map((category) => category.percentage),
        backgroundColor: state.budgetCategories.map(
          (category) => category.color.mainHex,
        ),
        borderColor: state.budgetCategories.map(
          (category) => category.color.lightHex,
        ),
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
              ₦
              {calculateTotalAmountSpent(
                state.budgetCategories,
              ).toLocaleString()}
            </Text>
            <Text as={"span"} color="brand.lightBlue4" variant="sub-heading-1">
              /₦{state.budget?.amount.toLocaleString()}
            </Text>
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
