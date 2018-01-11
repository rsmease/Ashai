import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';
import TaskIndexHeader from './task_index_header';
import TaskIndexGutter from './task_index_gutter';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // renderSideContent() {
  //   if (!(this.props.projectId === undefined)) {
  //     return <ProjectDetail project={this.props.project} />;
  //   }
  // }

  render() {
    return (
      <div className="hot-fix-task">
        <div className="task-index-placeholder">
          <TaskIndexHeader />
          <div className="task-panel">
            <TaskIndexGutter />
            <div className="task-index-container"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TaskIndex);
