import React, { useState } from 'react';
import { useForm, UseFormHandleSubmit } from 'react-hook-form';
import {
  Box,
  FormLabel,
  FormControl,
  Input,
  Button,
  InputGroup,
  Text,
  Stack,
  Flex,
  Heading,
} from '@chakra-ui/react';
import ErrorMessage from '../../utils/ErrorMessage';

const sleep = (ms: number | undefined) =>
  new Promise(resolve => setTimeout(resolve, ms));

type FormValues = {
  email: string;
  password: string;
};

export const ProposalForm = () => {
  // useForm Hook for form validation
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onBlur' });

  const onSubmit = async (
    data: { email: string; password: string },
    event: any
  ) => {
    event.preventDefault();
    await sleep(2000);
    if (data.email === 'bill') {
      alert(JSON.stringify(data));
    } else {
      alert('There is an error');
    }
    console.log(data);
  };

  const onError = (error: any) => {
    console.log(error);
  };

  return (
    <Flex>
      <Stack ml={24} mt={8}>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <FormControl>
            <Text
              fontSize={'xl'}
              textTransform={'uppercase'}
              color="white.500"
              mb={4}
            >
              Create A Proposal
            </Text>
            <FormLabel
              fontFamily="Exo 2"
              textTransform={'uppercase'}
              fontSize="12px"
              fontWeight={'bold'}
              color="white.500"
            >
              Funding Proposal Title
            </FormLabel>
            <Input
              w="250px"
              borderColor={'white'}
              borderStart={'none'}
              borderEnd={'none'}
              borderTop={'none'}
              size="sm"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel
              fontFamily="Exo 2"
              textTransform={'uppercase'}
              fontSize="12px"
              fontWeight={'bold'}
            >
              Request Fund %
            </FormLabel>
            <Input
              w="250px"
              borderColor={'white'}
              borderStart={'none'}
              borderEnd={'none'}
              borderTop={'none'}
              size="sm"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel
              fontFamily="Exo 2"
              textTransform={'uppercase'}
              fontSize="12px"
              fontWeight={'bold'}
            >
              Recipient Address
            </FormLabel>
            <Input
              w="250px"
              borderColor={'white'}
              borderStart={'none'}
              borderEnd={'none'}
              borderTop={'none'}
              size="sm"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel
              fontFamily="Exo 2"
              textTransform={'uppercase'}
              fontSize="12px"
              fontWeight={'bold'}
            >
              Vote End Date
            </FormLabel>
            <Input
              w="250px"
              borderColor={'white'}
              borderStart={'none'}
              borderEnd={'none'}
              borderTop={'none'}
              size="sm"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel
              fontFamily="Exo 2"
              textTransform={'uppercase'}
              fontSize="12px"
              fontWeight={'bold'}
            >
              Description
            </FormLabel>
            <Input h="100px" w="250px" borderColor={'white'} size="sm" />
          </FormControl>
          <Button>Submit</Button>
        </form>
      </Stack>
    </Flex>
  );
};
