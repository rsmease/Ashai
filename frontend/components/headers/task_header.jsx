import React from 'react';
import { Link, Router } from 'react-router-dom';
import TaskHeaderPrimary from './task_header_primary';
import TaskHeaderSecondary from './task_header_secondary';

export default  () => (
  <div className="task-header">
    <TaskHeaderPrimary />
    <TaskHeaderSecondary />
  </div>
);
