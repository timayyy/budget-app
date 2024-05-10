import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const customIconButton = defineStyle({
  background: "brand.lightBlue",
  color: "brand.darkBlue",
});

export const buttonTheme = defineStyleConfig({
  variants: {
    "icon-btn-blue": customIconButton,
  },
});
