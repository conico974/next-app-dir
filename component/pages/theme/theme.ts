import { extendTheme, withDefaultVariant } from "@chakra-ui/react";
import { components } from "./components";
import { colors } from "./colors";

export const theme = extendTheme(
  {
    styles: {
      global: {
        body: {
          bg: "primary",
          color: "text.primary",
          overflowX: "hidden",
        },
        p: {
          whiteSpace: "pre-line",
        },
      },
    },
    colors,
    textStyles: {
      h1: {
        fontSize: { base: "7xl", md: "7xl", lg: "7xl" },
        color: "blue",
      },
    },
    fonts: {
      body: "Montserrat,Helvetica,Arial,Roboto,sans-serif",
      heading: "Montserrat,Helvetica,Arial,Roboto,sans-serif",
    },
    components,
  },
  withDefaultVariant({
    variant: "flushed",
  })
);
