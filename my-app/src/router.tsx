import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./layout/main-page";

export const Router = () => {
  return (
    <Switch>
      <Route path="/" component={MainPage} />
    </Switch>
  );
};
