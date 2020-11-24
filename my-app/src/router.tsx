import React from "react";
import { Switch, Route } from "react-router-dom";
import ContactInfo from "./containers/contact-info";

export const Router = () => {
  return (
    <Switch>
      <Route path="/" component={ContactInfo} />
    </Switch>
  );
};
