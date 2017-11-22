//import
import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

//placeholder components
import PlaceholderComponent from '../placeholder';

//session form components
import LoginContainer from '../session/login_container';
import SignupContainer from '../session/signup_container';
import HorizontalLogoNamed from '../headers/horizontal_logo_named';
import { LoginFooter, SignupFooter } from '../footers/footer';
import AppContainer from './app_container';


export default () => (
  <main>

    <Route exact path="/" component={PlaceholderComponent}/>

    <AuthRoute path="/signup" component={SignupContainer}/>

    <AuthRoute path="/login" component={LoginContainer}/>

    <ProtectedRoute path="/app" component={AppContainer}/>
  </main>
);
