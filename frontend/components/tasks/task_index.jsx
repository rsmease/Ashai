
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
  }

  //display current tasks on initial load
  componentDidMount() {
    this.props.requestUser(this.props.currentTargetId);
  }

  // renderSideContent() {
  //   if (!(this.props.projectId === undefined)) {
  //     return <ProjectDetail project={this.props.project} />;
  //   }
  // }

  showTasks() {
    console.log(this.props);
    if (this.props.currentTarget !== undefined) {
      return (
        <div className="task-index-container">
          <AddTaskForm
            createNewTask={this.props.createNewTask}
            groupType={this.props.groupType}
            currentTargetId={this.props.currentTargetId} />
          {
            this.props.currentTarget.tasks_assigned_to_user.map(task => (
              <TaskIndexItem
                task={task}
                key={Math.random()}
                currentTarget={this.props.currentTarget}
                requestUpdateToTask={this.props.requestUpdateToTask}
                requestToDeleteTask={this.props.requestToDeleteTask}
              />
            ))
          }
        </div>
      );
    } else {
      return (
        <div className="task-index-container">
          <AddTaskForm
            createNewTask={this.props.createNewTask}
            groupType={this.props.groupType}
            currentTargetId={this.props.currentTargetId} />
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
      </div>
    );
  }
}

export default withRouter(TaskIndex);
