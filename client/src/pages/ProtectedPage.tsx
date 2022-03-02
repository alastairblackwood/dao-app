import React from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import {
  Box,
  Stack,
  Image,
  Drawer,
  DrawerContent,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { Card } from '../containers/cards';

type LayoutProps = {
  children: React.ReactNode;
};

export const ProtectedPage = ({ children }: LayoutProps) => {
  return (
    <Flex>
      <Card />
    </Flex>
  );
};
