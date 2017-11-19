import React from 'react';
import { Route } from 'react-router-dom';
import { PlaceholderComponent } from './placeholder';
// import { AuthRoute, ProtectedRoute } from '..utils/route_util';

export default () => (
  <div>
    <Route path="/" component={PlaceholderComponent}/>
  </div>
);
