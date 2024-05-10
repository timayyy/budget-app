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
import { useBudgetContext } from "../../../context/budget-context";

export function OverviewMenu() {
  const { state, dispatch } = useBudgetContext();

  const isBudgetCreated = !!state.budget;

  return (
    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<Dots />}
          colorScheme="transparent"
          size="lg"
          isDisabled={!isBudgetCreated}
        />
        <MenuList>
          <MenuItem
            icon={
              <Circle size="2rem" bg="brand.lightBlue" color="brand.darkBlue">
                <NairaIcon />
              </Circle>
            }
            onClick={() =>
              dispatch({
                type: "show-overview",
                payload: "expenses",
              })
            }
          >
            <Text variant="body-2">Expenses overview</Text>
          </MenuItem>
          <MenuItem
            icon={
              <Circle size="2rem" bg="brand.lightBlue" color="brand.darkBlue">
                <NairaIcon />
              </Circle>
            }
            onClick={() =>
              dispatch({
                type: "show-overview",
                payload: "categories",
              })
            }
          >
            <Text variant="body-2">Category overview</Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
