import React from 'react';
import * as SessionActions from '../../actions/session_actions';
import SidebarContainer from '../sidebar/sidebar_container';
import NavigationHeaderContainer from '../headers/navigation_header_container';
import TaskHeaderContainer from '../headers/task_header_container';
import TeamIndexContainer from '../teams/team_index_container';
import TaskIndexContainer from '../tasks/task_index_container';

export const MainAppViewCurrentUser = () => (
  <main className="app-container">
    <SidebarContainer/>
    <div className="task-with-header">
      <NavigationHeaderContainer/>
      <TaskHeaderContainer/>
      <TaskIndexContainer />
    </div>
  </main>
);

export const MainAppViewTeam = () => (
  <main className="app-container">
    <SidebarContainer/>
    <div className="task-with-header">
      <NavigationHeaderContainer/>
      <TaskHeaderContainer/>
      <TeamIndexContainer/>
    </div>
  </main>
);

export const MainAppViewUser = () => (
  <main className="app-container">
    <SidebarContainer/>
    <div className="task-with-header">
      <NavigationHeaderContainer/>
      <TaskHeaderContainer/>
      <TaskIndexContainer />
    </div>
  </main>
);

export const MainAppViewProject = () => (
  <main className="app-container">
    <SidebarContainer/>
    <div className="task-with-header">
      <NavigationHeaderContainer/>
      <TaskHeaderContainer/>
      <TaskIndexContainer />
    </div>
  </main>
);
