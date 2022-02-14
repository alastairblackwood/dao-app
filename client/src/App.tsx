import React from "react";
import { Flex } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Layout } from "./components/common";
import Login from "./pages/Login";

// https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src/App.tsx
function App() {
  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;
