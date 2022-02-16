import React from 'react';
import { Box, Button, Flex, Image, Heading, Stack } from '@chakra-ui/react';
import SuperDaoLogo from '../assets/img/SuperDaoLogo2.svg';

const ProtectedPage = () => {
  return (
    <Stack direction="row">
      <Box
        boxSize="lg"
        position="absolute"
        color="color.100"
        w="200%"
        mt="40%"
        p={4}
      >
        <Image src={SuperDaoLogo} alt="Super DAO" />
      </Box>
      <Box>PROTECTED</Box>
    </Stack>
  );
};

export default ProtectedPage;
