import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="?*" component={Page404} />
    </Switch>
  </BrowserRouter>
);
