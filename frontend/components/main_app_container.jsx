import React from 'react';
import { connect } from 'react-redux';
import * as SessionActions from '../actions/session_actions';
import TaskList from './tasks/task_list';
import MainAppHeader from './headers/main_header';
import MainSidebar from './sidebar/main_sidebar';

export default () => (
  <div className="main-app-container">
    <MainAppHeader />
    <MainSidebar />
    <TaskList />
  </div>
);
