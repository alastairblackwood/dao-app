import React from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import {
  Box,
  Stack,
  Image,
  Drawer,
  DrawerContent,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import Navbar from '../navbar/Navbar';
import PublicPage from '../../../pages/PublicPage';
import SuperDaoLogo from '../../../assets/img/SuperDaoLogo2.svg';

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
      <Navbar />
      <Stack direction="row">
        <Box boxSize="lg" color="color.100" w="200%" mt="40%" p={4}>
          <Image src={SuperDaoLogo} alt="Super DAO" />
        </Box>
      </Stack>
      {/* {children} */}
    </Flex>
  );
};

export default Layout;
