import React from "react";
import "./GlobalStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";

import { Router } from "./Router";
import { HelmetProvider } from "react-helmet-async";
import { Reset } from "styled-reset";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HelmetProvider>
    <React.StrictMode>
      <Reset></Reset>
      <Router></Router>
    </React.StrictMode>
  </HelmetProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
