import React from 'react';
import { Link, Router } from 'react-router-dom';

class TaskIndexHeader extends React.Component {
  render () {
    return (<div className="task-list-header">
      <Link className="add-task-task-list"
        to="/app">Add Task</Link>
    </div>);
  }
}

export default TaskIndexHeader;
