import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Box, Flex, CSSReset, Image, Center, HStack } from '@chakra-ui/react';
import { AuthContext, AuthContextProvider } from './contexts/AuthContext';
import { Layout } from './components/common/layout';
import { Navbar } from './components/common/navbar';
// import PublicPage from './pages/PublicPage';
// import ProtectedPage from './pages/ProtectedPage';
import { Card } from './containers/cards';
import { ProtectedPage } from './pages/ProtectedPage';
import { RegisterForm } from './components/forms/RegisterForm';
import LoginForm from './components/forms/LoginForm';

import SuperDaoLogo from '../src/assets/img/SuperDaoLogo2.svg';

const App = () => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <Flex
      bgGradient="linear(to-t, #1d2225, #707070)"
      direction="column"
      align="center"
      justify="center"
    >
      <CSSReset />
      <Navbar />
      <Flex justify="center" align="center" w="100%" h="90vh">
        <Box
          position={'absolute'}
          mb={10}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Image src={SuperDaoLogo} alt="Super DAO" />
        </Box>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route
            path="/protected"
            element={<ProtectedPage children={undefined} />}
          />
          {/* {loggedIn && <Route path="/protected" element={<ProtectedPage />} />}
          {!loggedIn && <Route path="/" element={<PublicPage />} />} */}
        </Routes>
      </Flex>
    </Flex>
  );
};

export default App;
