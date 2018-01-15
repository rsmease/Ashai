
//utils
import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';

//components
import TaskIndexHeader from './task_index_header';
import TaskIndexGutter from './task_index_gutter';
import TaskIndexItem from './task_index_item';
import AddTaskForm from './add_task_form';
import UserDetail from '../users/user_detail';
import ProjectDetail from '../projects/project_detail';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  //display current tasks on initial load
  componentDidMount() {
    switch (this.props.groupType) {
      case "user":
        this.props.requestUser(this.props.currentTargetId);
        break;
      case "currentUser":
        this.props.requestUser(this.props.currentTargetId);
        break;
      case "project":
        this.props.requestProject(this.props.currentTargetId);
        break;
      default:
        break;
    }
  }

  showDetail() {
    if (this.props.currentTarget !== undefined) {
      switch (this.props.groupType) {
        case "user":
          return <UserDetail currentTarget={this.props.currentTarget} />;
        case "currentUser":
          return <UserDetail currentTarget={this.props.currentTarget} />;
        case "project":
          return <ProjectDetail currentTarget={this.props.currentTarget} />;
        default:
          break;
      }
    }
  }

  showAddTaskForm() {
    return (
      <AddTaskForm
        createNewTask={this.props.createNewTask}
        groupType={this.props.groupType}
        currentTargetId={this.props.currentTargetId} />
    );
  }

  showUserTasks() {
    return (<div className="task-index-container">
      {this.showAddTaskForm()}
      {
        this.props.currentTarget.tasks_assigned_to_user.map(task => {
          return <TaskIndexItem
            task={task}
            key={Math.random()}
            currentTarget={this.props.currentTarget}
            requestUpdateToTask={this.props.requestUpdateToTask}
            requestToDeleteTask={this.props.requestToDeleteTask}
          />;
        })
      }
    </div>);
  }

  showProjectTasks() {
    return (<div className="task-index-container">
      {this.showAddTaskForm()}
      {
        this.props.currentTarget.tasks.map(task => {
          return <TaskIndexItem
            task={task}
            key={Math.random()}
            currentTarget={this.props.currentTarget}
            requestUpdateToTask={this.props.requestUpdateToTask}
            requestToDeleteTask={this.props.requestToDeleteTask}
          />;
        })
      }
    </div>);
  }

  showTasks() {
    if (this.props.currentTarget !== undefined) {
      switch (this.props.groupType) {
        case "user":
          return this.showUserTasks();
        case "currentUser":
          return this.showUserTasks();
        case "project":
          return this.showProjectTasks();
        default:
          break;
      }
    } else {
      return (
        <div className="task-index-container">
        </div>
      );
    }
  }

  render() {
    return (
      <div className="panel-and-detail-container">
        <div className="panel-container">
          <TaskIndexHeader />
          <div className="task-index-and-gutter-container">
            <TaskIndexGutter />
            {this.showTasks()}
          </div>
        </div>
        {this.showDetail()}
      </div>
    );
  }
}

export default withRouter(TaskIndex);
