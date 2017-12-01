import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';
import TaskIndexHeader from '../headers/task_index_header';
import TaskIndexGutter from '../footers/task_index_gutter';
import ProjectDetail from './project_detail';

class ProjectTaskIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestProject(this.props.projectId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.projectId !== newProps.projectId) {
      this.props.requestProject(newProps.projectId);

    }
  }

  renderProjectDetail() {
    if (this.props.project) {
      return (<ProjectDetail
         project={this.props.project}
         currentUser={this.props.currentUser}/>);
    } else {
      return (<div></div>);
    }
  }

  render() {
    return (
      <div className="project-task-wrapper">
        <div className="task-panel-container task-panel-team">
          <TaskIndexHeader />
          <div className="task-panel">
            <TaskIndexGutter />
            <div className="task-index-container"></div>
          </div>
        </div>
        {this.renderProjectDetail()}
      </div>
    );
  }
}

export default withRouter(ProjectTaskIndex);
