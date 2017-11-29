import React from 'react';
import { Link, Router } from 'react-router-dom';
import TeamSidebarProfiles from './team_sidebar_profiles';
import * as MaterialDesign from 'react-icons/lib/md';

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
          <div className="sidebar-tools-team">
            <MaterialDesign.MdCreate
              className="sidebar-tool"/>
            <MaterialDesign.MdDelete
              className="sidebar-tool"/>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamSidebarIndex;
