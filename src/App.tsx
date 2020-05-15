import * as React from "react";
import { Router, Link, RouteComponentProps } from "@reach/router";
import Home from "./pages/Home/Home";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    background-color:#ebeced;

  }
  html {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: Arial,Helvetica,Sans,Sans-Serif,"Sans Serif";
  }

  * {
    box-sizing:inherit;
  }
`;

let HomeRoute = (props: RouteComponentProps) => <Home />;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <HomeRoute path="/" />
      </Router>
    </>
  );
}
