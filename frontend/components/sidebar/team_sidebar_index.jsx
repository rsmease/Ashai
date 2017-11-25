import React from 'react';
import { Link, Router } from 'react-router-dom';

class TeamSidebarIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar-link-list">
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
