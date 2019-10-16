import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from './pages/Login';
import Medicoes from './pages/Medicoes';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/medicoes" component={Medicoes} />
      </Switch>
    </BrowserRouter>
  )
}