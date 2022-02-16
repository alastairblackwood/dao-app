import React from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import {
  Box,
  Drawer,
  DrawerContent,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import Navbar from '../navbar/Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex
      bgGradient="linear(to-t, #1d2225, #424242)"
      direction="column"
      align="center"
      h="100%"
      minH="100vh"
      maxW={{ xl: '1200px' }}
      m="0 auto"
    >
      {children}
    </Flex>
  );
};

export default Layout;
