import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { radii } from "./radii";
import { space } from "./space";
import { typography } from "./typography";
import { components } from "./components";

export default extendTheme({
  ...colors,
  ...radii,
  ...space,
  ...typography,
  ...components,
});
