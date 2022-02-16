import {
  Box,
  Flex,
  Link,
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

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box px={4}>
        <Flex h={24} alignItems={'left'} justifyContent={'space-between'}>
          <Image src={SuperDaoDrawer} alt="Super DAO" mr="20" />
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={20}>
              {/* <Button onClick={toggleColorMode} mr="20">
                {colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
              </Button> */}
              <Spacer />
              <Box mr="20"></Box>
              <Spacer />
              <Menu>
                <Avatar src="https://bit.ly/broken-link" />
                <MenuButton
                  as={Button}
                  fontFamily={'Audiowide-Regular'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                  ml={20}
                >
                  Login/Sign Up
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <LoginForm />
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
