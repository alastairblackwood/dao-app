import React from "react";
import { Flex } from "@chakra-ui/react";

type HomeLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <Flex direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto">
      {children}
    </Flex>
  );
};

export default HomeLayout;
