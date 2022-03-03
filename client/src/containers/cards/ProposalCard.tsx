import React, { useState, useEffect } from 'react';
import { Badge, Box, Flex } from '@chakra-ui/react';

interface IProposalCardProps {
  children: React.ReactNode;
}

export const ProposalCard = (props: IProposalCardProps) => {
  return (
    // Re-usable box for the proposal card
    <Flex>
      <Box
        className="ui proposal cards"
        w="520px"
        radius="10px"
        h="236px"
        mt={10}
        rounded="lg"
        overflow="hidden"
        boxShadow="sm"
        bg="black"
        opacity={0.7}
      >
        {/* <Flex flexDir={'row-reverse'}>
          <Badge
            mr={16}
            alignContent={'right'}
            textTransform="uppercase"
            variant="outline"
            fontSize="sm"
            letterSpacing="wide"
            rounded="lg"
            colorScheme="green"
          >
            Approved
          </Badge>
        </Flex> */}
        {props.children}
      </Box>
    </Flex>
  );
};
