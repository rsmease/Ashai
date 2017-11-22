import React from 'react';
import { connect } from 'react-redux';
import * as SessionActions from '../../actions/session_actions';
import MainSidebar from '../sidebar/main_sidebar';
import TaskWithHeaderContainer from '../tasks/task_with_header_container';

export default () => (
  <div className="app-container">
    <MainSidebar />
    <TaskWithHeaderContainer />
  </div>
);
