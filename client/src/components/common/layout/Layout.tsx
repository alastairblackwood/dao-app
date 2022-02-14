import React from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../navbar/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.900")}
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
    >
      {children}
    </Flex>
  );
};

export default Layout;
