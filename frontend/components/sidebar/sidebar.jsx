import React from 'react';
import { Link, Router } from 'react-router-dom';
import MiniHorizontalLogoNamed from './mini_logo';
import TeamSidebarIndex from './team_sidebar_index';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(this.props);
  }

  renderTeams() {
    return(
      <div className="teams-container">
        {
          this.props.currentUser.teams.map(
            team => <TeamSidebarIndex team={team} />
          )
        }
      </div>
    );
  }

  render () {
    return (
      <div className="sidebar">
        <MiniHorizontalLogoNamed />
        <div className="fixed-sidebar-container">
          <div className="sidebar-team-list">
            <h3 className="sidebar-header-primary">My Teams</h3>
            {this.renderTeams()}
          </div>
          <div className="sidebar-projects-list">
            <h3 className="sidebar-header-primary">My Projects</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
