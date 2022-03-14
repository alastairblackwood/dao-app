import React from 'react';
import { Box, BoxProps, Flex } from '@chakra-ui/react';

export enum BoxSize {
  SM = 'sm',
}

interface CardProps extends Omit<BoxProps, 'size'> {
  size?: BoxSize;
}

const width = {
  sm: '10px',
  md: '20px',
  lg: '30px',
};

const height = {
  sm: '10px',
  md: '20px',
  lg: '30px',
};

const Card = ({ size = BoxSize.SM, ...props }: CardProps) => (
  <Box {...props} w={width[size]} h={height[size]}>
    {props.children}
  </Box>
);
