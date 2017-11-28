import React from 'react';
import { Link, Router } from 'react-router-dom';

class TaskIndexHeader extends React.Component {
  render () {
    return (<div className="task-list-header">
      <a className="add-task-task-list">Add Task</a>
    </div>);
  }
}

export default TaskIndexHeader;
