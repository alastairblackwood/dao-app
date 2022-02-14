export const components = {
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        fontStyle: "normal",
      },
      variants: {
        outline: {
          borderColor: "gray.500",
        },
        primary: {
          bg: "red.500",
          color: "grey.100",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
          _hover: {
            bg: "red.600",
            color: "grey.100",
          },
        },
      },
    },
  },
};
