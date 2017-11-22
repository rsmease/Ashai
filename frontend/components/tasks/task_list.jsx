import React from 'react';
import { Link, Router } from 'react-router-dom';

class TaskList extends React.Component {

  componentWillMount () {
    document.title = "Ashai - Tasks";
  }

  render () {
    return (
      <div className="task-list">
        <h1>I am the task list!</h1>
      </div>
    );
  }

}

export default TaskList;
