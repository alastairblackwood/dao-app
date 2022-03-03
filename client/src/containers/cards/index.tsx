import React, { useState } from 'react';
import {
  Box,
  Text,
  Badge,
  Icon,
  Flex,
  Button,
  Stack,
  Heading,
} from '@chakra-ui/react';
import ThumbsUpIcon from '@material-ui/icons/ThumbUp';
import ThumbsDownIcon from '@material-ui/icons/ThumbDown';

export const Card = () => {
  const [isVoted, setIsVoted] = React.useState(false);
  const [isUpVoted, setIsUpVoted] = React.useState(0);
  const [isDownVoted, setIsDownVoted] = React.useState(0);

  return (
    <Flex>
      <Box
        w="520px"
        radius="10px"
        h="236px"
        rounded="sm"
        overflow="hidden"
        boxShadow="sm"
        bg="black"
        opacity={0.7}
      >
        <Box p={5}>
          <Stack isInline align="baseline">
            <Text textTransform="uppercase" fontSize="sm" color="white.500">
              Funding Proposal
            </Text>
            <Badge
              textTransform="uppercase"
              variant="outline"
              fontSize="sm"
              colorScheme="green"
              letterSpacing="wide"
              rounded="lg"
            >
              Approved
            </Badge>
          </Stack>
          <Heading as="h2" fontWeight="semibold" fontSize="xl" my={2}>
            Buy a Chimpanzee
          </Heading>
          <Text isTruncated textTransform="uppercase" fontSize="sm">
            Request Fund %
          </Text>
          <Stack isInline align="baseline">
            <Heading as="h2" fontWeight="semibold" fontSize="xl" my={2}>
              69%
            </Heading>
            <Text
              isTruncated
              fontWeight="semibold"
              textTransform="uppercase"
              fontSize="md"
            >
              = 0.39 ETH
            </Text>
          </Stack>
          <Stack isInline align="baseline">
            <Text fontSize={'sm'} fontStyle={'italic'}>
              Submitted in
            </Text>
            <Text fontSize={'sm'} fontStyle={'italic'}>
              29 Feb 2022
            </Text>
          </Stack>
          <Stack isInline align="baseline">
            <Text fontSize={'sm'} fontStyle={'italic'}>
              Submitted by
            </Text>
            <Text fontSize={'sm'} fontStyle={'italic'}>
              0xe84037...9d485
            </Text>
          </Stack>
          <Stack isInline align="baseline">
            <Text fontSize={'sm'} fontStyle={'italic'}>
              Recipient
            </Text>
            <Text fontSize={'sm'} fontStyle={'italic'}>
              0xe84037...9d485
            </Text>
          </Stack>
          <Flex>
            <Box>
              <Button onClick={() => setIsUpVoted(isUpVoted + 1)}>
                <ThumbsUpIcon htmlColor="green" />{' '}
                {`${isUpVoted === 0 ? '' : isUpVoted}`}
              </Button>
              <Button onClick={() => setIsDownVoted(isDownVoted + 1)}>
                <ThumbsDownIcon htmlColor="red" />{' '}
                {`${isDownVoted === 0 ? '' : isDownVoted}`}
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
