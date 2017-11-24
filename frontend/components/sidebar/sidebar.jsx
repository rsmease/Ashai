import React from 'react';
import { Link, Router } from 'react-router-dom';
import MiniHorizontalLogoNamed from './mini_logo';

class Sidebar extends React.Component {
  render () {
    return (
      <div className="sidebar">
        <MiniHorizontalLogoNamed />
        <div fixed-sidebar-container>
          <div className="sidebar-team-list">
            <h3>My Team</h3>
          </div>
          <div className="sidebar-projects-list">
            <h3>My Projects</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
