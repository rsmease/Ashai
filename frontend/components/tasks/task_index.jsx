import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';
import TaskIndexHeader from '../headers/task_index_header';
import TaskIndexGutter from '../footers/task_index_gutter';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  // renderTeamCards() {
  //   if (this.props.team) {
  //     return (<div className="team-index-container">
  //       {
  //         this.props.team.members.map(function(member) {
  //           return <TeamIndexItem
  //             key={Math.random()}
  //             member={member}
  //             />;
  //         })
  //       }
  //     </div>);
  //   } else {
  //     return(
  //       <div>
  //       </div>
  //     );
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
