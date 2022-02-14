import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {
  ChakraProvider,
  CSSReset,
  theme,
  ColorModeScript,
} from "@chakra-ui/react";
import { useTheme } from "../src/theme/custom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import customTheme from "./theme/Theme";

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider theme={customTheme}>
      {/* add AuthContext.Provider here */}
      <ColorModeScript initialColorMode="light" />
      <App />
      {/* add AuthContext.Provider here */}
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
