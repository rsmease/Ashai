import React from 'react';
import { Link, Router } from 'react-router-dom';
import TeamSidebarProfiles from './team_sidebar_profiles';
import * as FaIconPack from 'react-icons/lib/fa';

class TeamSidebarIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar-link-list">
        <TeamSidebarProfiles members={this.props.team.members}/>
        <div className="sidebar-link-list-item">
          <Link
            className="sidebar-link-project"
            to={`/teams/${this.props.team.id}`}>
            {this.props.team.name}
          </Link>
          <a className="sidebar-ellipsis-team"><FaIconPack.FaEllipsisH/></a>
        </div>
      </div>
    );
  }
}

export default TeamSidebarIndex;
