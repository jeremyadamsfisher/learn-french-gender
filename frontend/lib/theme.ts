import { extendTheme } from "@chakra-ui/react";

export const accentLight = "pink.600", accentLightHover = "pink.800", accentDark = "pink.50", flourish = {
  transition: "0.25s ease",
  _hover: {
    shadow: "2xl",
    transform: "scale(1.015)",
  },
};

export default extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    heading: `"Syne Mono", monospace`,
    body: `"Nunito", serif`,
  },
  components: {
    Avatar: {
      baseStyle: {
        font: "Open Sans, sans-serif",
      },
    },
    Button: {
      variants: {
        base: {
          transition: "0.15s ease",
          bg: accentLight,
          _hover: {
            bg: accentLightHover
          },
          color: "#FFFFFF",
          shadow: "md",
        },
        outline: {
          bg: "gray.50",
        },
      },
      defaultProps: {
        variant: "base",
      },
    },
  },
});