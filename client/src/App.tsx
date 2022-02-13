import React from "react";
import { Flex } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { Header, Navbar } from "./components/common";
import Home from "./pages/HomePage";
import HomeLayout from "../src/pages/HomeLayout";

// https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src/App.tsx
function App() {
  return (
    <Flex className="App" direction="column">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Flex>
    // </Flex>
  );
}

export default App;
