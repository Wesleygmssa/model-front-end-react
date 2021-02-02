import React from 'react';
import { Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import MyRute from './MyRoute';
//
export const Routes = () => (
  <Switch>
    <MyRute exact path="/" component={Login} isClosed />
    <MyRute path="*" component={Page404} />
  </Switch>
);
