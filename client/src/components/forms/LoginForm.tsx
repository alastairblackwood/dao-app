import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  CircularProgress,
  Text,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthContext';
import ErrorMessage from '../../utils/ErrorMessage';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  // Auth context for login
  const { loggedIn, login, logout } = useContext(AuthContext);

  // useState Hook for form validation

  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // useForm Hook for form validation
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
    formState,
  } = useForm<LoginFormValues>({ mode: 'onBlur' });

  const onSubmit = async (data: LoginFormValues): Promise<void> => {
    if (!data.email || !data.password) {
      return setErrorMessage('Please enter your email and password');
    }
    setLoading(true);
    try {
      await login(data.email, data.password);
      setLoading(false);
      setShowPassword(false);
    } catch (error) {
      setLoading(false);
      setShowPassword(false);
    }
    console.log(data);
  };

  // useEffect(() => {
  //   setError('email', {
  //     type: 'manual',
  //     message: 'Please enter a valid email address',
  //   });
  // }, [setError]);

  // const isError = input === '';

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Flex justifyContent="center" alignItems="center" mt="4px">
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          {error && <ErrorMessage message={error} />}

          {loggedIn ? (
            <Box textAlign="center">
              <Text fontFamily="Saira-Condensed"> logged in!</Text>
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
              <Box my={0} mt={10} textAlign="left">
                <FormControl>
                  <FormLabel
                    fontFamily="Exo 2"
                    fontSize="12px"
                    fontWeight={'bold'}
                  >
                    Email
                  </FormLabel>
                  <Input
                    {...register('email', {
                      required: 'email is required',
                    })}
                    placeholder="email address"
                    width={'250'}
                    borderWidth="0px 0px 1px 0px'"
                    borderColor="white"
                    type={'email'}
                    size={'sm'}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel
                    fontFamily="Exo 2"
                    fontSize="12px"
                    fontWeight={'bold'}
                  >
                    Password
                  </FormLabel>
                  <Input
                    {...register('password', {
                      required: {
                        value: true,
                        message: 'password is required',
                      },
                    })}
                    borderWidth="0px 0px 1px 0px'"
                    borderColor="white"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="*******"
                    size="sm"
                  />
                </FormControl>
                {/* // CONFIRM PASSWORD FIELD UNDER CONSTRUCTION
                 <FormControl isRequired mt={4}>
                  <FormLabel
                    fontFamily="Exo 2"
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

                <Button
                  width="full"
                  variantColor="teal"
                  variant="ghost"
                  mt={4}
                  fontSize={20}
                  fontFamily="Exo 2"
                  fontWeight={'bold'}
                  type="submit"
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
                </Button>

                <Box textAlign="center">
                  <Text fontWeight="bold" fontSize="12px" fontFamily="Exo 2">
                    New member?{' '}
                    <Button
                      ml={2}
                      w={'80px'}
                      bg={'transparent'}
                      fontFamily="Exo 2"
                      fontWeight={'bold'}
                      fontSize={14}
                    >
                      Register here
                    </Button>
                  </Text>
                </Box>
              </Box>
            </>
          )}
        </form>
      </Box>
    </Flex>
  );
};

export default LoginForm;
