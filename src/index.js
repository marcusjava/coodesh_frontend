import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { QueryClient } from "react-query";
import { PacientProvider } from "./context/pacient";
import "dayjs/locale/pt-br";
import dayjs from "dayjs";
import "bootstrap/dist/css/bootstrap.min.css";

dayjs.locale("pt-br");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <PacientProvider>
        <App />
      </PacientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
