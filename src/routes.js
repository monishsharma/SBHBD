import React from 'react'
import Home from "./views/home"
import {  Route, Switch } from "react-router-dom";
import Countdown from './component/countdown';
import Wish from './views/wish';

 const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/countdown-begin" component={Countdown}></Route>
        <Route exact path="/HBD-saumya" component={Wish}></Route>
    </Switch>
 );

 export default Routes;
