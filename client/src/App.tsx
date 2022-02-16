import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Layout } from './components/common';
import PublicPage from './pages/PublicPage';
import ProtectedPage from './pages/ProtectedPage';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route element={<Layout children={undefined} />}>
          <Route path="/" element={<PublicPage />} />
          <Route
            path="/protected"
            element={
              <AuthContextProvider>
                <ProtectedPage />
              </AuthContextProvider>
            }
          />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
