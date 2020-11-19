import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import { Router } from "./router";
import theme from "./theme";

function App() {
  return (
    <StylesProvider injectFirst={true}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
