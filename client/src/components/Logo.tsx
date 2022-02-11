import react from "react";
import {
  useColorMode,
  Box,
  IconButton,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import SuperDao from "../assets/img/SuperDaoLogo2.svg";

// Render SVG
const Logo = () => {
  return (
    <Stack direction="row">
      <Box boxSize="lg" w="200%" p={4}>
        <Image src={SuperDao} alt="Super DAO" />
      </Box>
    </Stack>
  );
};

//** */ RENDER PNG FILE
// const Logo = () => {
//   return <Image src={"/assets/img/Group3.png"} alt="Super DAO" />;
// };

export default Logo;
