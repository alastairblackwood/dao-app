import axios from 'axios';
import React, { useState, ReactNode, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

import { UserContext } from '../../utils/context/UserContext';
import userLogin from '../../utils/mockApi';
import daoAPI from '../../utils/api/api';
import ErrorMessage from '../../utils/ErrorMessage';
import { config } from 'process';

const baseURL = 'http://localhost:8000/api/auth';

const LoginForm = () => {
  const auth = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [value, setValues] = useState({
    email: '',
    password: '',
  });

  // form inputs and values
  const inputs = [
    {
      id: '1',
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'Please enter a valid email address',
      label: 'Email',
    },
    {
      id: '2',
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage: 'Please enter a valid password',
      label: 'Password',
    },
  ];

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setLoading(true);
    try {
      await userLogin({ email, password });
      setIsLoggedIn(true);
      setLoading(false);
      setShowPassword(false);
    } catch (error) {
      setError('Invalid username or password');
      setLoading(false);
      setEmail('');
      setPassword('');
      setShowPassword(false);
    }

    // setLoading(true);
    auth.loading();
    // post the request on pressing the submit, posting the input values
    const { data } = await axios.post(
      `${baseURL}/login`,
      {
        ...value,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    auth.login();

    // log userInfo in localStorage in browswer
    console.log(data);
    localStorage.setItem('userInfo', JSON.stringify(data));
    // turn off Loading sequence/spinner
    auth.notLoading();
  };

  const onChange = (event: { target: { name: any; value: any } }) => {
    setValues({ ...value, [event.target.name]: event.target.value });
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
        {isLoggedIn ? (
          <Box textAlign="center">
            <Text fontFamily="Audiowide-Regular">{email} logged in!</Text>
            <Button
              variantColor="orange"
              variant="outline"
              width="full"
              mt={4}
              onClick={() => setIsLoggedIn(false)}
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
