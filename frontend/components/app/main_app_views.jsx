import React from 'react';
import * as SessionActions from '../../actions/session_actions';
import SidebarContainer from '../sidebar/sidebar_container';
import NavigationHeaderContainer from '../headers/navigation_header_container';
import TaskHeaderContainer from '../headers/task_header_container';
import TeamIndexContainer from '../teams/team_index_container';

export const MainAppViewCurrentUser = () => (
  <main>
    <SidebarContainer/>
    <div className="task-with-header">
      <NavigationHeaderContainer/>
      <TaskHeaderContainer/>
    </div>
  </main>
);

export const MainAppViewTeam = () => (
  <main>
    <SidebarContainer/>
    <div className="task-with-header">
      <NavigationHeaderContainer/>
      <TaskHeaderContainer/>
      <TeamIndexContainer/>
    </div>
  </main>
);
