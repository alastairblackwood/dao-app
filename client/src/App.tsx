import React from "react";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/react";
import { Heading, VStack, Flex } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import ThemeToggler from "./components/ThemeToggler";

// import Header from "./components/Header";
// import Social from "./components/Social";
// import Profile from "./components/Profile";
import Login from "./pages/Login";

import "./App.css";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <ThemeToggler />
      <VStack p={5}>
        <Flex w="100%">
          <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
            React Dao
          </Heading>
        </Flex>
        <Login />
      </VStack>
    </ThemeProvider>
  );
}

export default App;
