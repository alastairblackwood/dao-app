import React, { useState, useEffect } from 'react';
import { Badge, Box, Flex } from '@chakra-ui/react';

interface IProposalCardProps {
  children: React.ReactNode;
}

export const MyProposalCard = (props: IProposalCardProps) => {
  return (
    // Re-usable box for the proposal card
    <Flex>
      <Box
        className="ui proposal cards"
        w="835px"
        radius="10px"
        h="389px"
        mt={10}
        rounded="lg"
        overflow="hidden"
        boxShadow="sm"
        bg="black"
        opacity={0.7}
      >
        {props.children}
      </Box>
    </Flex>
  );
};
