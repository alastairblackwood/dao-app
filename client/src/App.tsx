import React from "react";
import { Flex } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import HomeLayout from "../src/pages/HomeLayout";

// https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src/App.tsx
function App() {
  return (
    <Flex className="App" direction="column">
      {/* <Flex border="1px solid red">nav</Flex>
      <Flex border="1px solid yellow"> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Flex>
    // </Flex>
  );
}

export default App;
