import React from 'react';
import { connect } from 'react-redux';
import TaskList from './task_list';
import TaskHeader from '../headers/task_header';

export default () => (
  <div className="task-with-header">
    <TaskHeader />
    <TaskList />
  </div>
);
