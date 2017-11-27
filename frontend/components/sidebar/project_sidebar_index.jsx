import React from 'react';
import { Link, Router } from 'react-router-dom';

class ProjectSidebarIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar-link-list">
        <Link
          className="sidebar-nav-link"
          to={`/projects/${this.props.project.id}`}>
          {this.props.project.name}
        </Link>
      </div>
    );
  }
}

export default ProjectSidebarIndex;
