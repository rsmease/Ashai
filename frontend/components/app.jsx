import React from 'react';
import { Route } from 'react-router-dom';
import PlaceholderComponent from './placeholder';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

export default () => (
  <div>
    <Route exact path="/" component={PlaceholderComponent}/>
    <AuthRoute path="/signup" component={SignupContainer}/>
    <AuthRoute path="/login" component={LoginContainer}/>
  </div>
);
