import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';
import TeamIndexItem from './team_index_item';
import TaskListHeader from '../headers/task_list_header';
import TaskListGutter from '../footers/task_list_gutter';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
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
      <div className="flex-container">
        <TaskListHeader />
        <div className="task-panel">
          <TaskListGutter />
          <div className="task-list-container"></div>
        </div>
      </div>
    );
  }
}

export default withRouter(TaskIndex);
