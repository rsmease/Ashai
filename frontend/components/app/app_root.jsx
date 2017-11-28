//import
import React from 'react';
import { Route, Switch } from 'react-router-dom';
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

//modals
import NewProjectModalContainer from '../modals/new_project_modal_container';

import {
  MainAppViewCurrentUser,
  MainAppViewTeam,
  MainAppViewUser,
  MainAppViewProject
} from './main_app_views';


export default () => (
  <main>
    <Switch>

      <AuthRoute exact path="/" component={PlaceholderComponent}/>
      <AuthRoute path="/login" component={LoginContainer}/>
      <AuthRoute path="/signup" component={SignupContainer}/>
      <AuthRoute path="/demo" component={DemoContainer}/>

      <ProtectedRoute path="/app" component={MainAppViewCurrentUser}/>
      <ProtectedRoute path="/teams/:teamId" component={MainAppViewTeam}/>
      <ProtectedRoute path="/users/:userId" component={MainAppViewUser}/>
      <ProtectedRoute path="/projects/:projectId"
        component={MainAppViewProject}/>

      <ProtectedRoute path="/viewmodal"
          component={NewProjectModalContainer}/>


      <AuthRoute component={LoginContainer}/>
      <ProtectedRoute component={MainAppViewCurrentUser}/>

    </Switch>


  </main>
);
