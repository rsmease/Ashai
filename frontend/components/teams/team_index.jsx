//utils
import React from 'react';
import { withRouter } from 'react-router-dom';

//components
import TeamIndexItem from './team_index_item';

class TeamIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTeam(this.props.currentTeamId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.currentTeamId !== newProps.currentTeamId) {
      this.props.requestTeam(newProps.currentTeamId);

    }
  }

  renderTeamCards() {
    if (this.props.team) {
      return (<div className="team-index-container">
        {
          this.props.team.members.map(function (member) {
            return <TeamIndexItem
              key={Math.random()}
              member={member}
            />;
          })
        }
      </div>);
    } else {
      return (
        <div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderTeamCards()}
      </div>
    );
  }
}

export default withRouter(TeamIndex);
