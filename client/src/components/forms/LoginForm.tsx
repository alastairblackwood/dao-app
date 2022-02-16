import axios from 'axios';
import React, { useState, ReactNode, useContext } from 'react';
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
    <Flex
      align="center"
      bg="#1d2225"
      justifyContent="center"
      height="30vh"
      width="full"
    >
      <Box
        p={4}
        maxWidth="400px"
        borderWidth={1}
        borderRadius={4}
        boxShadow="lg"
      >
        {loggedIn ? (
          <Box textAlign="center">
            <Text fontFamily="Audiowide-Regular">{email} logged in!</Text>
            <Button
              variantColor="orange"
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
            <Box textAlign="center">
              <Heading fontFamily="Audiowide-Regular">Login</Heading>
            </Box>
            <Box my={0} textAlign="left">
              <form onSubmit={handleSubmit}>
                {error && <ErrorMessage message={error} />}
                <FormControl isRequired>
                  <FormLabel fontFamily="Audiowide-Regular">Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="test@test.com"
                    size="sm"
                    onChange={event => setEmail(event.currentTarget.value)}
                  />
                </FormControl>
                <FormControl isRequired mt={4}>
                  <FormLabel fontFamily="Audiowide-Regular">Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="*******"
                      size="sm"
                      onChange={event => setPassword(event.currentTarget.value)}
                    />
                    <InputRightElement width="3rem">
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
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button
                  width="full"
                  variantColor="teal"
                  variant="outline"
                  mt={4}
                  type="submit"
                  fontFamily="Audiowide-Regular"
                >
                  {loading ? (
                    <CircularProgress
                      isIndeterminate
                      size="24px"
                      color="teal"
                    />
                  ) : (
                    'Sign In'
                  )}
                </Button>
              </form>
            </Box>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default LoginForm;
