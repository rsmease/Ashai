import React from 'react';
import { Link, Router } from 'react-router-dom';
import TeamSidebarProfiles from './team_sidebar_profiles';

class TeamSidebarIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar-link-list">
        <TeamSidebarProfiles members={this.props.team.members}/>
        <Link
          className="sidebar-nav-link"
          to={`/teams/${this.props.team.id}`}>
          {this.props.team.name}
        </Link>
      </div>
    );
  }
}

export default TeamSidebarIndex;
