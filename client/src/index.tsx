import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import theme from '../src/theme/Theme';

// import '@fontsource/audiowide/400.css';
// import '@fontsource/open-sans/700.css';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
    <BrowserRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
