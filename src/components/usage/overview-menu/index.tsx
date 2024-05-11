import {
  Box,
  Circle,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Dots, NairaIcon } from "../../icons";
import { useBudget } from "../../../hooks/use-budget";
import { useOverview } from "../../../hooks/use-overview";

export function OverviewMenu() {
  const { hasBudget } = useBudget();
  const { showCategoriesOverview, showExpensesOverview } = useOverview();

  return (
    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<Dots />}
          colorScheme="transparent"
          size="lg"
          isDisabled={!hasBudget}
        />
        <MenuList>
          <MenuItem
            icon={
              <Circle size="2rem" bg="brand.lightBlue" color="brand.darkBlue">
                <NairaIcon />
              </Circle>
            }
            onClick={showExpensesOverview}
          >
            <Text variant="body-2">Expenses overview</Text>
          </MenuItem>
          <MenuItem
            icon={
              <Circle size="2rem" bg="brand.lightBlue" color="brand.darkBlue">
                <NairaIcon />
              </Circle>
            }
            onClick={showCategoriesOverview}
          >
            <Text variant="body-2">Category overview</Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
