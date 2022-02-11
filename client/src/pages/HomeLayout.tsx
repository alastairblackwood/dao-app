import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../components/layouts/Header";

type HomeLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <Flex direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto">
      <Header />
      {children}
    </Flex>
  );
};

export default HomeLayout;
