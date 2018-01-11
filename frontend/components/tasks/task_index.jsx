import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';
import TaskIndexHeader from '../headers/task_index_header';
import TaskIndexGutter from '../footers/task_index_gutter';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
  }

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
