import React from 'react';
import * as SessionActions from '../../actions/session_actions';

//sidebar
import Sidebar from '../sidebar/sidebar';

//headers
import RootHeader from '../headers/root_header';

//core indices
import TeamIndexContainer from '../teams/team_index_container';
import TaskIndexContainer from '../tasks/task_index_container';


export const MainAppViewCurrentUser = () => (
  <div className="app-container">
    <Sidebar />
    <div className="task-with-header">
      <RootHeader />
      <TaskIndexContainer groupType="currentUser" />
    </div>
  </div>
);

export const MainAppViewTeam = () => (
  <div className="app-container">
    <Sidebar />
    <div className="task-with-header">
      <RootHeader />
      <TeamIndexContainer />
    </div>
  </div>
);

export const MainAppViewUser = () => (
  <div className="app-container">
    <Sidebar />
    <div className="task-with-header">
      <RootHeader />
      <TaskIndexContainer groupType="user" />
    </div>
  </div>
);

export const MainAppViewProject = () => (
  <div className="app-container">
    <Sidebar />
    <div className="task-with-header">
      <RootHeader />
      <TaskIndexContainer groupType="project" />
    </div>
  </div>
);
