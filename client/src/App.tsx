import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContext, AuthContextProvider } from './contexts/AuthContext';
import Layout from './components/common/layout/Layout';
import PublicPage from './pages/PublicPage';
import ProtectedPage from './pages/ProtectedPage';

function App() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <Layout>
      <Routes>
        <Route element={<Layout children={undefined} />}>
          {loggedIn && <Route path="/protected" element={<ProtectedPage />} />}
          {!loggedIn && <Route path="/" element={<PublicPage />} />}
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
