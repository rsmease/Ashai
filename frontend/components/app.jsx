//import
import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

//splash components
import PlaceholderComponent from './placeholder';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import HorizontalLogoNamed from './headers/horizontal_logo_named';


export default () => (
  <div>

    <Route exact path="/" component={PlaceholderComponent}/>

    <AuthRoute path="/signup" component={HorizontalLogoNamed}/>
    <AuthRoute path="/signup" component={SignupContainer}/>

    <AuthRoute path="/login" component={HorizontalLogoNamed}/>
    <AuthRoute path="/login" component={LoginContainer}/>
  </div>
);
