import React from 'react';
import { Flex, Box, useStyleConfig } from '@chakra-ui/react';

interface IProposalCardProps {
  children: React.ReactNode;
}

export const ProposalCard = (props: IProposalCardProps) => {
  const { ...rest } = props;

  const styles = useStyleConfig('Card');

  return (
    <Flex>
      <Box w="520px" h="250px" __css={styles} {...rest}>
        {props.children}
      </Box>
    </Flex>
  );
};

export const MyProposalCard = (props: IProposalCardProps) => {
  const { ...rest } = props;

  const styles = useStyleConfig('Card');

  return (
    <Flex>
      <Box w="835px" height="389px" __css={styles} {...rest}>
        {props.children}
      </Box>
    </Flex>
  );
};
