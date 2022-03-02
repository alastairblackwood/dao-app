import React from 'react';
import {
  Box,
  Wrap,
  Stack,
  Text,
  Button,
  Link,
  Avatar,
  Image,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

interface ICommentProps {
  author: string;
  timeAgo: string;
  text: string;
  src: string;
}

const CommentDetail = (props: ICommentProps) => {
  return (
    <Stack>
      <Box className="ui container comments">
        <Box className="comment">
          <Link href="/" className="avatar">
            <Avatar name="Dan Abrahmov" /> {props.src}
          </Link>
          <Box className="content">
            <Text color="gray.500">
              <Link href="/" className="author">
                {props.author}
              </Link>
            </Text>
          </Box>
          <Box className="metadata">
            <Text color="gray.500">
              <span className="date">{props.timeAgo}</span>
            </Text>
          </Box>
          <Box>
            {' '}
            <Text color="gray.500">{props.text}</Text>
          </Box>
          <ExternalLinkIcon mx="2px" />
        </Box>
      </Box>
    </Stack>
  );
};

export default CommentDetail;
