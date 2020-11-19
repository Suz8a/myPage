import React from "react";
import { Switch, Route } from "react-router-dom";
import ProfileImage from "./components/profile-image";

export const Router = () => {
  return (
    <Switch>
      <Route path="/" component={ProfileImage} />
    </Switch>
  );
};
