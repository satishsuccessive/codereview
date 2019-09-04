import React from 'react';
import LoginLayout from '../layouts/PrivateLayout';
import { BrowserRouter as Router, Route, Link, Match, Redirect, Switch } from 'react-router-dom';

const LoginLayoutRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={matchProps => (
      <LoginLayout>
          <Component {...matchProps} />
      </LoginLayout>
    )} />
  );

export default LoginLayoutRoute;
