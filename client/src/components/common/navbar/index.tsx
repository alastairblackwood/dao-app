import { BrowserRouter as Router, Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Spacer,
} from '@chakra-ui/react';
import { UserOutlined } from '@ant-design/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import LoginForm from '../../forms/LoginForm';
import SuperDaoDrawer from '../../../assets/img/Group3.svg';

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
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
                </Menu>
              </Box>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
