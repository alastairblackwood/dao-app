import react from 'react';
import {
  useColorMode,
  Box,
  IconButton,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box textAlign="right" py={4} mr={12}>
      <IconButton
        icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
        aria-label="Toggle dark mode"
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Box>
  );
}
