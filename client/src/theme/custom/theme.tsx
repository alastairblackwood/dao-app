import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { radii } from "./radii";
import { space } from "./space";
import { typography } from "./typography";
import { components } from "./components";
import { breakpoints } from "./breakpoints";

export default extendTheme({
  ...colors,
  ...radii,
  ...space,
  ...typography,
  ...components,
  ...breakpoints,
});
