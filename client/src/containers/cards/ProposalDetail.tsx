import { useState, useEffect } from 'react';
import {
  Box,
  Badge,
  Wrap,
  Heading,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react';
import ThumbsUpIcon from '@material-ui/icons/ThumbUp';
import ThumbsDownIcon from '@material-ui/icons/ThumbDown';

interface ICommentProps {
  type: string;
  badge: string;
  percent: string;
  ethAmount: string;
  timeAgo: string;
  ethSubmit: string;
  ethReceive: string;
}

export const ProposalDetail = (props: ICommentProps) => {
  const [isVoted, setIsVoted] = useState(false);
  const [isUpVoted, setIsUpVoted] = useState(0);
  const [isDownVoted, setIsDownVoted] = useState(0);

  return (
    <Box className="funding" p={5}>
      <Stack isInline align="baseline">
        <Text textTransform="uppercase" fontSize="sm" color="white.500">
          Funding Proposal
        </Text>
        <Badge
          textTransform="uppercase"
          variant="outline"
          fontSize="sm"
          letterSpacing="wide"
          rounded="lg"
        >
          {props.badge}
        </Badge>
      </Stack>
      <Box className="proposal type">
        <Heading as="h2" fontWeight="semibold" fontSize="xl" my={2}>
          {props.type}
        </Heading>
      </Box>
      <Stack className="request funds">
        <Text
          isTruncated
          textTransform="uppercase"
          fontSize="sm"
          color="white.500"
        >
          Request Fund %
        </Text>
      </Stack>
      <Stack className="funds amount" isInline align={'baseline'}>
        <Heading as="h2" fontWeight="semibold" fontSize="xl" my={2}>
          {props.percent}
        </Heading>
        <Text>{props.ethAmount}</Text>
      </Stack>
      <Stack isInline align="baseline">
        <Text fontSize={'sm'} fontStyle={'italic'}>
          Submitted on
        </Text>
        <Text fontSize={'sm'} fontStyle={'italic'}>
          {props.timeAgo}
        </Text>
      </Stack>
      <Stack isInline align="baseline">
        <Text fontSize={'sm'} fontStyle={'italic'}>
          Submitted by
        </Text>
        <Text fontSize={'sm'} fontStyle={'italic'}>
          {props.ethSubmit}
        </Text>
      </Stack>
      <Stack isInline align="baseline">
        <Text fontSize={'sm'} fontStyle={'italic'}>
          Recipient
        </Text>
        <Text fontSize={'sm'} fontStyle={'italic'}>
          {props.ethReceive}
        </Text>
      </Stack>
      <Box d="flex">
        <Button onClick={() => setIsUpVoted(isUpVoted + 1)}>
          <ThumbsUpIcon htmlColor="green" />{' '}
          {`${isUpVoted === 0 ? '' : isUpVoted}`}
        </Button>
        <Button onClick={() => setIsDownVoted(isDownVoted + 1)}>
          <ThumbsDownIcon htmlColor="red" />{' '}
          {`${isDownVoted === 0 ? '' : isDownVoted}`}
        </Button>
      </Box>
    </Box>
  );
};
