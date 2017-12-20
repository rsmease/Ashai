//import
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

//splash and session form components
import Splash from '../session/splash';
import SessionFormContainer from '../session/session_form_container';

import {
  MainAppViewCurrentUser,
  MainAppViewTeam,
  MainAppViewUser,
  MainAppViewProject
} from './main_app_views';


export default () => (
  <Switch>

    <AuthRoute exact path="/" component={Splash} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <AuthRoute path="/demo" component={SessionFormContainer} />

    <ProtectedRoute path="/app" component={MainAppViewCurrentUser} />
    <ProtectedRoute path="/teams/:teamId" component={MainAppViewTeam} />
    <ProtectedRoute path="/users/:userId" component={MainAppViewUser} />
    <ProtectedRoute path="/projects/:projectId"
      component={MainAppViewProject} />

  </Switch>
);
