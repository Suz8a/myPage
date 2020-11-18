import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PersonalInfo from "./components/personal-info";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={PersonalInfo} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
