import React from 'react';
import { Link, Router } from 'react-router-dom';
import MiniHorizontalLogoNamed from './mini_logo';
import TeamSidebarIndex from './team_sidebar_index';
import ProjectSidebarIndex from './project_sidebar_index';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(this.props);
  }

  renderTeams() {
    return(
      <div className="sidebar-list-container">
        {
          this.props.currentUser.teams.map(
            team => <TeamSidebarIndex key={Math.random()} team={team} />
          )
        }
      </div>
    );
  }

  renderProjects() {
    return(
      <div className="sidebar-list-container">
        {
          this.props.currentUser.projects.map(
            project => <ProjectSidebarIndex key={Math.random()}
             project={project} />
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
          <div className="sidebar-section">
            <div className="header-with-add-button">
              <h3 className="sidebar-header-primary">My Teams</h3>
                <Link to="/viewmodal"
                  className="sidebar-new-project-button">+</Link>
            </div>
            {this.renderTeams()}
          </div>
          <div className="sidebar-section">
            <div className="header-with-add-button">
              <h3 className="sidebar-header-primary">My Projects</h3>
                <Link to="/viewmodal"
                  className="sidebar-new-project-button">+</Link>
            </div>
            {this.renderProjects()}
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
