import axios from 'axios';
import React, { useState, useEffect, ReactNode, useContext } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  Button,
  CircularProgress,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { AuthContext, AuthContextProvider } from '../../contexts/AuthContext';
import userLogin from '../../utils/mockApi';
import ErrorMessage from '../../utils/ErrorMessage';
import { config } from 'process';

const LoginForm = () => {
  const { loggedIn, login, logout } = useContext(AuthContext);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setLoading(true);
    try {
      await login(email, password);
      setLoading(false);
      setShowPassword(false);
    } catch (error) {
      setError('Invalid username or password');
      setLoading(false);
      setEmail('');
      setPassword('');
      setShowPassword(false);
    }
  };

  return (
    <Flex justifyContent={'center'} alignItems={'center'} mt={4}>
      <Box>
        {loggedIn ? (
          <Box textAlign="center">
            <Text fontFamily="Saira-Condensed">{email} logged in!</Text>
            <Button
              variant="outline"
              width="full"
              mt={4}
              onClick={async () => await logout()}
            >
              Sign out
            </Button>
          </Box>
        ) : (
          <>
            <Box my={0} textAlign="left">
              <form onSubmit={handleSubmit}>
                {error && <ErrorMessage message={error} />}
                <FormControl isRequired>
                  <FormLabel
                    fontFamily="Saira-Condensed"
                    fontSize="12px"
                    fontWeight={'bold'}
                  >
                    Email
                  </FormLabel>
                  <Input
                    w="250px"
                    borderColor={'white'}
                    borderStart={'none'}
                    borderEnd={'none'}
                    borderTop={'none'}
                    type="email"
                    placeholder="labrys@email.com"
                    size="sm"
                    onChange={event => setEmail(event.currentTarget.value)}
                  />
                </FormControl>
                <FormControl isRequired mt={4}>
                  <FormLabel
                    fontFamily="Saira-Condensed"
                    fontSize="12px"
                    fontWeight={'bold'}
                  >
                    Password
                  </FormLabel>
                  <InputGroup>
                    <Input
                      borderColor={'white'}
                      borderStart={'none'}
                      borderEnd={'none'}
                      borderTop={'none'}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="*******"
                      size="sm"
                      onChange={event => setPassword(event.currentTarget.value)}
                    />
                  </InputGroup>
                </FormControl>
                {/* <FormControl isRequired mt={4}>
                  <FormLabel
                    fontFamily="Saira-Condensed"
                    fontSize="10px"
                    fontWeight={'bold'}
                  >
                    Confirm Password
                  </FormLabel>
                  <InputGroup>
                    <Input
                      borderColor={'white'}
                      borderStart={'none'}
                      borderEnd={'none'}
                      borderTop={'none'}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="*******"
                      size="sm"
                      onChange={event => setPassword(event.currentTarget.value)}
                    />
                  </InputGroup>
                </FormControl> */}
                {/* <InputRightElement width="3rem">
                      <Button
                        h="1.5rem"
                        size="sm"
                        onClick={handlePasswordVisibility}
                      >
                        {showPassword ? (
                          <Icon name="view-off" />
                        ) : (
                          <Icon name="view" />
                        )}
                      </Button>
                    </InputRightElement> */}
                {/* </InputGroup>
                </FormControl> */}
                {/* <Button
                  width="full"
                  variantColor="teal"
                  variant="ghost"
                  mt={4}
                  type="submit"
                  fontFamily="Saira-Condensed"
                >
                  {loading ? (
                    <CircularProgress
                      isIndeterminate
                      size="24px"
                      color="teal"
                    />
                  ) : (
                    'Login'
                  )}
                </Button> */}
                <Box>
                  <Text
                    fontFamily="Saira-Condensed"
                    fontWeight="bold"
                    fontSize={20}
                    mt={2}
                    ml={24}
                  >
                    <Link to="/protected">Login</Link>
                  </Text>
                </Box>
                <Box textAlign="center">
                  <Text fontWeight="bold" fontSize="12px">
                    New member?{' '}
                    <Button
                      w={'80px'}
                      type={'submit'}
                      bg={'transparent'}
                      fontFamily="Saira-Condensed"
                      fontWeight={'bold'}
                      fontSize={14}
                      onSubmit={handleSubmit}
                    >
                      Register here
                    </Button>
                  </Text>
                </Box>
              </form>
            </Box>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default LoginForm;
