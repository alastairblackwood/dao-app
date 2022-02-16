import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { AuthContextProvider } from './utils/context/AuthContext';
import { AuthContextProvider } from './contexts/AuthContext';
import {
  ChakraProvider,
  Box,
  CSSReset,
  theme,
  ColorModeScript,
  background,
} from '@chakra-ui/react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import customTheme from './theme/Theme';
import styled from '@emotion/styled';

const StyledBox = styled(Box)`
  background-image: url('../../assets/img/SuperDaoLogo2.svg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider theme={customTheme}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
