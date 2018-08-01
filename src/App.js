import React, { Component } from 'react';
import './App.css';
import Main from "./pc/container/main";
import {Route, Switch} from "react-router-dom";
import Login from "./pc/component/login";
import register from './pc/component/register';
import employee from './pc/component/employee';

class App extends Component {

  render() {
    return (
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/main' component={Main}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={register}/>
            <Route path='/employee' component={employee}/>
        </Switch>
    );
  }
}

export default App;
