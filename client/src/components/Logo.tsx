import react from "react";
import {
  useColorMode,
  Box,
  IconButton,
  Heading,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";

export default function Logo() {
  return (
    <Box boxSize="sm">
      <Image src="'../logo.svg" />
    </Box>
  );
}
