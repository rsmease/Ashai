import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';
import TeamIndexItem from './team_index_item';

class TeamIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTeam(this.props.currentTeamId);
  }

  renderTeamCards() {
    if (this.props.team) {
      return (<div className="team-index-container">
        {
          this.props.team.members.map(function(member) {
            return <TeamIndexItem
              key={Math.random()}
              member={member}
              />;
          })
        }
      </div>);
    } else {
      return(
        <div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="flex-container">
        {this.renderTeamCards()}
      </div>
    );
  }
}

export default withRouter(TeamIndex);