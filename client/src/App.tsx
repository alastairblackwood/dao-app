import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Box, Flex, CSSReset, Image, Center, HStack } from '@chakra-ui/react';
import { AuthContext, AuthContextProvider } from './contexts/AuthContext';
import { PublicPage } from './pages/PublicPage';
import ProtectedPage from './pages/ProtectedPage';
import MyProposalPage from './pages/MyProposalPage';

import SuperDaoLogo from '../src/assets/img/SuperDaoLogo2.svg';

const App = () => {
  const { loggedIn } = useContext(AuthContext);

  // this routes are for protected
  if (loggedIn) {
    return (
      <Routes>
        <Route path="/" element={<ProtectedPage children={undefined} />} />
        <Route path=":id" element={<MyProposalPage children={undefined} />} />
      </Routes>
    );
  }

  // this routes are unprotected
  return (
    <Routes>
      <Route path="/" element={<PublicPage children={undefined} />} />
    </Routes>
  );
};

export default App;
