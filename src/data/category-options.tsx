import {
  FoodIcon,
  SavingsIcon,
  ShoppingIcon,
  CallIcon,
  CarIcon,
} from "../components/icons";

export const categoryOptions = [
  {
    value: "foodAndDrinks",
    name: "Food and Drink",
    color: {
      main: "brand.yellow",
      light: "brand.lightYellow",
      mainHex: "#C89104",
      lightHex: "#F4E9CD",
    },
    icon: <FoodIcon height="1.1rem" width="1.4rem" />,
  },
  {
    value: "savings",
    name: "Savings",
    color: {
      main: "brand.green",
      light: "brand.lightGreen",
      mainHex: "#038A39",
      lightHex: "rgba(3, 138, 57, 0.2)",
    },
    icon: <SavingsIcon height="1.1rem" width="1.4rem" />,
  },
  {
    value: "shopping",
    name: "Shopping",
    color: {
      main: "brand.purple",
      light: "brand.lightPurple",
      mainHex: "#5A04C8",
      lightHex: "rgba(90, 4, 200, 0.2)",
    },
    icon: <ShoppingIcon height="1.1rem" width="1.4rem" />,
  },
  {
    value: "calls",
    name: "Calls",
    color: {
      main: "brand.pink",
      light: "brand.lightPink",
      mainHex: "#C80462",
      lightHex: "rgba(200, 4, 98, 0.2)",
    },
    icon: <CallIcon height="1.1rem" width="1.4rem" />,
  },
  {
    value: "car",
    name: "Car",
    color: {
      main: "brand.lightBlue2",
      light: "brand.lightBlue3",
      mainHex: "#04A5C8",
      lightHex: "rgba(4, 165, 200, 0.2)",
    },
    icon: <CarIcon height="1.1rem" width="1.4rem" />,
  },
];
