//import
import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

//placeholder components
import PlaceholderComponent from '../placeholder';

//session form components
import LoginContainer from '../session/login_container';
import SignupContainer from '../session/signup_container';
import DemoContainer from '../session/demo_container';
import SidebarContainer from '../sidebar/sidebar_container';
import NavigationHeaderContainer from '../headers/navigation_header_container';
import TaskHeaderContainer from '../headers/task_header_container';

import MainAppView from './main_app_view';


export default () => (
  <main>

    <Route exact path="/" component={PlaceholderComponent}/>

    <AuthRoute path="/login" component={LoginContainer}/>
    <AuthRoute path="/signup" component={SignupContainer}/>
    <AuthRoute path="/demo" component={DemoContainer}/>

    <ProtectedRoute path="/app" component={MainAppView}/>

  </main>
);
