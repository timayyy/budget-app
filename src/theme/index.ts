import { extendTheme } from "@chakra-ui/react";
import { headingTheme } from "./components/heading";
import { textTheme } from "./components/text";
import { colors } from "./foundations/colors";
import "@fontsource/poppins";
import { buttonTheme } from "./components/button";
// import { fonts } from "./foundations/fonts";
export const theme = extendTheme({
  colors,
  fonts: {
    body: `'Poppins', sans-serif`,
  },
  components: {
    Heading: headingTheme,
    Text: textTheme,
    Button: buttonTheme,
  },
});
