import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Box, Flex, CSSReset, Image, Center, HStack } from '@chakra-ui/react';
import { AuthContext, AuthContextProvider } from './contexts/AuthContext';
import { PublicPage } from './pages/PublicPage';
import { ProtectedPage } from './pages/ProtectedPage';
import { Card } from './containers/cards';
import { RegisterForm } from './components/forms/RegisterForm';
import LoginForm from './components/forms/LoginForm';

import SuperDaoLogo from '../src/assets/img/SuperDaoLogo2.svg';

const App = () => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<PublicPage children={undefined} />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route
        path="/protected"
        element={<ProtectedPage children={undefined} />}
      />
      {/* {loggedIn && <Route path="/protected" element={<ProtectedPage />} />}
          {!loggedIn && <Route path="/" element={<PublicPage />} />} */}
    </Routes>
  );
};

export default App;
