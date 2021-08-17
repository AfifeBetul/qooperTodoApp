import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MasterPage from "../MasterPage";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`} component={MasterPage} />
      </Switch>
    </BrowserRouter>
  );
};
