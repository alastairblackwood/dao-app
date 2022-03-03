import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flex,
  CSSReset,
  Box,
  Stack,
  VStack,
  Badge,
  Icon,
  Text,
  Button,
  Image,
  Spacer,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
} from '@chakra-ui/react';
import LoginForm from '../components/forms/LoginForm';
import { Card } from '../containers/cards';
import { ProposalCard } from '../containers/cards/ProposalCard';
import { ProposalDetail } from '../containers/cards/ProposalDetail';
import { AiOutlineLogout } from 'react-icons/ai';
import SuperDaoLogo from '../assets/img/SuperDaoLogo2.svg';
import SuperDaoDrawer from '../assets/img/Group3.svg';

type LayoutProps = {
  children: React.ReactNode;
};

export const ProtectedPage = ({ children }: LayoutProps) => {
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
                <Stack isInline alignItems={'center'} spacing={4} mr={6} mb={4}>
                  <Button variant={'ghost'}>
                    <Link to="/protected">
                      <Badge
                        fontFamily={'Audiowide-Regular'}
                        textTransform="uppercase"
                        variant="outline"
                        fontSize="sm"
                        color={'white'}
                        letterSpacing="wide"
                      >
                        All Proposals
                      </Badge>
                    </Link>
                  </Button>
                  <Button variant="ghost">
                    <Badge
                      fontFamily={'Audiowide-Regular'}
                      textTransform="uppercase"
                      variant="outline"
                      fontSize="sm"
                      color={'white'}
                      letterSpacing="wide"
                    >
                      My Proposals
                    </Badge>
                  </Button>
                </Stack>

                <Menu>
                  <Stack ml={4} mb={2} isInline align={'baseline'}>
                    <Text
                      mr={6}
                      fontFamily={'Audiowide-Regular'}
                      fontSize={'sm'}
                    >
                      Welcome, labrys@email.com
                    </Text>
                    <Icon as={AiOutlineLogout} />

                    <Button
                      mt={2}
                      ml={4}
                      color="white"
                      fontSize="14px"
                      fontFamily={'Audiowide-Regular'}
                      variant={'link'}
                      cursor={'pointer'}
                      minW={0}
                    >
                      <Link to="/">
                        <Text>Logout</Text>
                      </Link>
                    </Button>
                  </Stack>
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
      <Flex justify={'center'} alignItems={'center'} w="100%" maxHeight="100vh">
        <Box
          position={'absolute'}
          justifyContent={'center'}
          alignItems={'center'}
          mt={64}
        >
          <Image src={SuperDaoLogo} alt="Super DAO" />
        </Box>
      </Flex>
      <VStack justifyContent={'center'} alignItems={'center'}>
        <Box mb={2}>
          <ProposalCard>
            <ProposalDetail
              type="Buy a chimpanzee"
              badge="In Progress"
              percent="69%"
              ethAmount="0.39 ETH"
              timeAgo="29th Feb 2022"
              ethSubmit="0xe84037...9d486"
              ethReceive="0xe84037...uwu69"
            />
          </ProposalCard>
        </Box>
        <Box mb={2}>
          <ProposalCard>
            <ProposalDetail
              type="Buy two chimpanzees"
              badge="Approved"
              percent="85%"
              ethAmount="1.88 ETH"
              timeAgo="1st Mar 2022"
              ethSubmit="e098asdfh908a4"
              ethReceive="e23lklasdf98kljas"
            />
          </ProposalCard>
        </Box>
        <Box mb={2}>
          <ProposalCard>
            <ProposalDetail
              type="Buy a dog or a cat"
              badge="Declined"
              percent="15%"
              ethAmount="0.039 ETH"
              timeAgo="2nd Mar 2022"
              ethSubmit="e098asdfh908a4"
              ethReceive="e23lklasdf98kljas"
            />
          </ProposalCard>
        </Box>
      </VStack>
    </Flex>
  );
};
