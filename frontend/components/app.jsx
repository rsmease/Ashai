//import
import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

//splash components
import PlaceholderComponent from './placeholder';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import LogoHeader from './headers/splash_header/logo_header';


export default () => (
  <div>

    <Route exact path="/" component={PlaceholderComponent}/>

    <AuthRoute path="/signup" component={LogoHeader}/>
    <AuthRoute path="/signup" component={SignupContainer}/>

    <AuthRoute path="/login" component={LogoHeader}/>
    <AuthRoute path="/login" component={LoginContainer}/>
  </div>
);
