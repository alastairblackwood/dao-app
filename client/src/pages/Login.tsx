import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import SuperDaoLogo from "../assets/img/SuperDaoLogo2.svg";
import { Link } from "react-router-dom";
import { Layout } from "../components/common";
import LoginForm from "../components/menu/LoginForm";

const Login = () => {
  return (
    <Stack direction="row">
      <Box boxSize="lg" color="color.100" w="200%" mt="40%" p={4}>
        <Image src={SuperDaoLogo} alt="Super DAO" />
      </Box>
    </Stack>
  );
};

export default Login;

//** */ RENDER PNG FILE
// const Logo = () => {
//   return <Image src={"/assets/img/Group3.png"} alt="Super DAO" />;
// };
