import axios from 'axios';
import React, { useState, ReactNode, useContext } from 'react';
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

export const RegisterForm = () => {
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
    <Flex align="center" justifyContent="center" height="30vh" width="full">
      <Box p={4} bgColor="black.300" maxWidth="346px" h="267px" boxShadow="lg">
        {loggedIn ? (
          <Box textAlign="center">
            <Text fontFamily="Audiowide-Regular">{email} logged in!</Text>
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
                  <FormLabel fontFamily="Audiowide-Regular" fontSize="10px">
                    Email
                  </FormLabel>
                  <Input
                    type="email"
                    placeholder="labrys@email.com"
                    size="sm"
                    onChange={event => setEmail(event.currentTarget.value)}
                  />
                </FormControl>
                <FormControl isRequired mt={4}>
                  <FormLabel fontFamily="Audiowide-Regular" fontSize="10px">
                    Password
                  </FormLabel>
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
                <FormControl isRequired mt={4}>
                  <FormLabel fontFamily="Audiowide-Regular" fontSize="10px">
                    Confirm Password
                  </FormLabel>
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
                {/* <Button
                  width="full"
                  variantColor="teal"
                  variant="ghost"
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
                    'Login'
                  )}
                 
                </Button> */}
                <Text fontSize={20} mt={4} ml={24}>
                  <Link to="/cards">Register</Link>
                </Text>
                <Box textAlign="center">
                  <Text fontFamily="Audiowide-Regular" fontSize="12px" mt={4}>
                    Already has an account? <Link to="/login">Login here</Link>
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
