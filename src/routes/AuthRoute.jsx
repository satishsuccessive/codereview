import React from 'react';
import DashboardLayout from '../layouts/AuthLayout'
import { BrowserRouter as Router, Route, Link, Match, Redirect, Switch } from 'react-router-dom';

const DashboardRoute = ({ component: Component, ...rest }) => (
  <Route
      {...rest}
      render={(matchProps) => (
        <DashboardLayout>
          <Component {...matchProps} />
        </DashboardLayout>
      )}
    />
    );
export default DashboardRoute;
