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

export const headingTheme = defineStyleConfig({
  variants: {
    "heading-1": heading1,
    "heading-2": heading2,
    "heading-3": heading3,
  },
});
