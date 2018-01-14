
//utils
import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';

//components
import TaskIndexHeader from './task_index_header';
import TaskIndexGutter from './task_index_gutter';
import TaskIndexItem from './task_index_item';
import AddTaskForm from './add_task_form';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTargetTasks: undefined
    };
  }

  //display current tasks on initial load
  componentWillMount() {
    switch (this.props.groupType) {
      case "currentUser":
        this.setState({ currentTargetTasks: this.props.currentTarget.tasks_assigned_to_user });
        break;
      case "user":
        this.setState({ currentTargetTasks: this.props.currentTarget.tasks_assigned_to_user });
        break;
      case "project":
        //TODO: UPDATE TO REFLECT TASKS-ASSIGNED-TO-PROJECT  
        this.setState({ currentTargetTasks: this.props.currentUsr.tasks_assigned_to_user });
        break;
      default:
        break;
    }
  }

  //live update tasks when a new task is submitted
  componentWillReceiveProps(nextProps) {
    console.log("Component is receiving new props");
    console.log(nextProps);
    switch (this.props.groupType) {
      case "currentUser":
        this.setState({ currentTargetTasks: nextProps.currentTarget.tasks_assigned_to_user });
        break;
      case "user":
        this.setState({ currentTargetTasks: nextProps.currentTarget.tasks_assigned_to_user });
        break;
      case "project":
        //TODO: UPDATE TO REFLECT TASKS-ASSIGNED-TO-PROJECT  
        this.setState({ currentTargetTasks: nextProps.currentUsr.tasks_assigned_to_user });
        break;
      default:
        break;
    }
  }

  // renderSideContent() {
  //   if (!(this.props.projectId === undefined)) {
  //     return <ProjectDetail project={this.props.project} />;
  //   }
  // }

  showTasks() {
    return (
      <div className="task-index-container">
        <AddTaskForm
          createNewTask={this.props.createNewTask}
          groupType={this.props.groupType}
          currentTargetId={this.props.currentTargetId} />
        {
          this.state.currentTargetTasks.map(task => (
            <TaskIndexItem
              task={task}
              key={Math.random()}
              requestUpdateToTask={this.props.requestUpdateToTask}
              requestToDeleteTask={this.props.requestToDeleteTask}
            />
          ))
        }
      </div>
    );
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
      </div>
    );
  }
}

export default withRouter(TaskIndex);
