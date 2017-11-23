import React from 'react';
import { connect } from 'react-redux';
import * as SessionActions from '../../actions/session_actions';
import SidebarContainer from '../sidebar/sidebar_container';
import TaskWithHeaderContainer from '../tasks/task_with_header_container';

export default () => (
  <div className="app-container">
    <SidebarContainer />
    <TaskWithHeaderContainer />
  </div>
);
