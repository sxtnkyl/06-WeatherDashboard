import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/app";
import GlobalStyle from "./styles/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
