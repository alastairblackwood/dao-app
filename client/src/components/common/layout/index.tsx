import React from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import {
  Box,
  Stack,
  Image,
  Link,
  Spacer,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, TriangleDownIcon } from '@chakra-ui/icons';
import LoginForm from '../../forms/LoginForm';
import SuperDaoDrawer from '../../../assets/img/Group3.svg';

import SuperDaoLogo from '../../../assets/img/SuperDaoLogo2.svg';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex
      bgGradient="linear(to-t, #1d2225, #424242)"
      direction="column"
      align="center"
      h="100%"
      w="100%"
      minH="100vh"
      maxW={{ xl: '1200px' }}
      m="0 auto"
    >
      <Box px={4} mt={6}>
        <Flex h={24} alignItems={'left'} justifyContent={'space-between'}>
          <Link to="/">
            <Image src={SuperDaoDrawer} alt="Super DAO" mr="20" />
          </Link>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={20}>
              {/* <Button onClick={toggleColorMode} mr="20">
                {colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
              </Button> */}
              <Spacer />

              <Spacer />
              <Box isInline align={'baseline'}>
                <Menu>
                  <Avatar src="https://bit.ly/broken-link" size="sm" />
                  <MenuButton
                    mt={2}
                    ml={4}
                    color="white"
                    fontSize="14px"
                    fontFamily={'Audiowide-Regular'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}
                  >
                    Login / Sign Up
                  </MenuButton>
                  <MenuList
                    ml={4}
                    mt={3}
                    justifyContent={'center'}
                    w="346px"
                    h="267px"
                    radius="12px"
                    bgGradient="linear(to-l, #323232, #282828)"
                    autoSelect={true}
                    alignItems={'center'}
                    opacity={0.5}
                  >
                    <LoginForm />
                  </MenuList>
                  <TriangleDownIcon ml={2} />
                </Menu>
              </Box>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Stack direction="row">
        <Box boxSize="lg" color="color.100" w="100%" mt="40%" p={4}>
          <Image src={SuperDaoLogo} alt="Super DAO" />
        </Box>
      </Stack>
      {/* {children} */}
    </Flex>
  );
};
