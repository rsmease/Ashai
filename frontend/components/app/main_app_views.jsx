import React from 'react';
import * as SessionActions from '../../actions/session_actions';

//sidebar
import SidebarContainer from '../sidebar/sidebar_container';

//headers
import NavigationHeaderContainer from '../headers/navigation_header_container';
import TaskHeaderContainer from '../headers/task_header_container';
import HomeHeaderContainer from '../headers/home_header_container';
import UserHeaderContainer from '../headers/user_header_container';
import TeamHeaderContainer from '../headers/team_header_container';
import ProjectHeaderContainer from '../headers/project_header_container';

//core indices
import TeamIndexContainer from '../teams/team_index_container';
import TaskIndexContainer from '../tasks/task_index_container';
import ProjectTaskIndexContainer from
 '../projects/project_task_index_container';


export const MainAppViewCurrentUser = () => (
  <main className="app-container">
    <SidebarContainer/>
    <div className="task-with-header">
      <NavigationHeaderContainer/>
      <HomeHeaderContainer/>
      <TaskIndexContainer />
    </div>
  </main>
);

export const MainAppViewTeam = () => (
  <main className="app-container">
    <SidebarContainer/>
    <div className="task-with-header">
      <NavigationHeaderContainer/>
      <TeamHeaderContainer/>
      <TeamIndexContainer/>
    </div>
  </main>
);

export const MainAppViewUser = () => (
  <main className="app-container">
    <SidebarContainer/>
    <div className="task-with-header">
      <NavigationHeaderContainer/>
      <UserHeaderContainer/>
      <TaskIndexContainer />
    </div>
  </main>
);

export const MainAppViewProject = () => (
  <main className="app-container">
    <SidebarContainer/>
    <div className="task-with-header">
      <NavigationHeaderContainer/>
      <ProjectHeaderContainer/>
      <ProjectTaskIndexContainer />
    </div>
  </main>
);
