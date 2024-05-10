import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const heading1 = defineStyle({
  fontSize: "2.8rem",
  fontWeight: 700,
});
const heading2 = defineStyle({
  fontSize: "1.4rem",
  fontWeight: 500,
});
const heading3 = defineStyle({
  fontSize: "2rem",
  fontWeight: 500,
});
const Body1 = defineStyle({
  fontSize: "1.4rem",
  fontWeight: 400,
});
const Body2 = defineStyle({
  fontSize: "1.2rem",
  fontWeight: 400,
});
const Body3 = defineStyle({
  fontSize: "1rem",
  fontWeight: 450,
});
const SubHeading1 = defineStyle({
  fontSize: "1.6rem",
  fontWeight: 400,
});
const MenuButton = defineStyle({
  fontSize: "1.2rem",
  fontWeight: 450,
});

export const textTheme = defineStyleConfig({
  variants: {
    "heading-1": heading1,
    "heading-2": heading2,
    "heading-3": heading3,
    "body-1": Body1,
    "body-2": Body2,
    "body-3": Body3,
    "sub-heading-1": SubHeading1,
    "menu-button": MenuButton,
  },
});
