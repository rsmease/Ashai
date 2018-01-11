import React from 'react';
import { Link, Router } from 'react-router-dom';

class TaskIndexHeader extends React.Component {
  render() {
    return (<div className="task-index-header">
      <a className="add-task-button">Add Task</a>
    </div>);
  }
}

export default TaskIndexHeader;
