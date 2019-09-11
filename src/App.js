import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './Paginas/Login';
import Registrar from './Paginas/Registrar';
import DashBoard from './Paginas/DashBoard';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>                    
          <Route path="/" exact component={Login}/>          
          <Route path="/Registrar" component={Registrar}/>          
          <Route path="/DashBoard" component={DashBoard}/>          
        </Switch>
      </BrowserRouter>

    );    
  }
}

export default App;
