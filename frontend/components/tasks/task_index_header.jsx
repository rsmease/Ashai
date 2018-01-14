import React from 'react';
import { Link, Router } from 'react-router-dom';

class TaskIndexHeader extends React.Component {

  toggleAddTaskForm() {
    let addTaskForm = document.getElementById(`add-task-form`);
    addTaskForm.classList.remove("task-index-item-hidden");
  }

  render() {
    return (<div className="task-index-header">
      <a className="add-task-button"
        onClick={() => this.toggleAddTaskForm()}>
        Add Task
      </a>
    </div>);
  }
}

export default TaskIndexHeader;
