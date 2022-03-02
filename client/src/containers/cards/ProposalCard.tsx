import React from 'react';
import {
  Box,
  Text,
  Badge,
  Icon,
  Container,
  Input,
  Link,
  Button,
  Flex,
  Stack,
  VStack,
  HStack,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Select,
  Heading,
} from '@chakra-ui/react';

export const ProposalCard = () => {
  const [isVoted, setIsVoted] = React.useState(false);

  return (
    <Flex justifyContent={'center'} alignItems={'center'}>
      <Box
        w="520px"
        radius="10px"
        h="236px"
        rounded="sm"
        overflow="hidden"
        boxShadow="sm"
        bg="black"
        position={'absolute'}
        opacity={0.8}
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
          <Text
            isTruncated
            fontWeight="light"
            textTransform="uppercase"
            fontSize="md"
          >
            Request Fund %
          </Text>
          <Stack isInline align="baseline">
            <Heading as="h2" fontWeight="semibold" fontSize="xl" my={2}>
              69%
            </Heading>
            <Text
              isTruncated
              fontWeight="light"
              textTransform="uppercase"
              fontSize="md"
            >
              0.39 ETH
            </Text>
          </Stack>
          <Stack isInline justify="space-between" color="gray.500">
            <Text fontWeight="semibold" fontSize="lg"></Text>
            <Box d="flex">
              <Box as="span">
                {Array(4)
                  .fill('🌟')
                  .map((star: any, index: number) => (
                    <Icon name="star" color="yellow.500" key={index} />
                  ))}
                <Icon name="star" />
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};
