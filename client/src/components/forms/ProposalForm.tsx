import { useState } from 'react';
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

export const ProposalForm = () => {
  return (
    <Flex>
      <Stack ml={24} mt={8}>
        {/* <form onSubmit={handleSubmit}>
                {error && <ErrorMessage message={error} />} */}
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
      </Stack>
    </Flex>
  );
};
