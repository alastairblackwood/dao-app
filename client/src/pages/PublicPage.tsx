import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flex,
  CSSReset,
  Box,
  Stack,
  Image,
  Button,
  Spacer,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
} from '@chakra-ui/react';
import LoginForm from '../components/forms/LoginForm';
import { MoonIcon, SunIcon, TriangleDownIcon } from '@chakra-ui/icons';
import SuperDaoLogo from '../assets/img/SuperDaoLogo2.svg';
import SuperDaoDrawer from '../assets/img/Group3.svg';

type LayoutProps = {
  children: React.ReactNode;
};

export const PublicPage = ({ children }: LayoutProps) => {
  return (
    <Flex
      bgGradient="linear(to-t, #1d2225, #707070)"
      direction="column"
      align="center"
      justify="center"
    >
      <CSSReset />
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
                  <Button variant={'ghost'}>
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
                    <TriangleDownIcon ml={4} mt={2} />
                  </Button>
                </Menu>
              </Box>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Flex justify="center" align="center" w="100%" h="90vh">
        <Box
          position={'absolute'}
          mb={10}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Link to="/">
            <Image src={SuperDaoLogo} alt="Super DAO" />
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};
