import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Block from "../../components/Block";
import TopBar from "../../components/TopBar";
import Todos from "../Todos";

import MasterPageWrapper from "./index.style";

export default () => {
  return (
    <MasterPageWrapper>
      <TopBar />
      <Block className="page-wrapper">
        <BrowserRouter>
          <Switch>
            <Route exact path={`/`} component={Todos} />
          </Switch>
        </BrowserRouter>
      </Block>
    </MasterPageWrapper>
  );
};
