import React from 'react';
import { Link, Router } from 'react-router-dom';
import SidebarOptionsPopup from './sidebar_options_popup';
import * as FaIconPack from 'react-icons/lib/fa';

class ProjectSidebarIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar-link-list-project">
        <div className="sidebar-link-list-item">
          <Link
            className="sidebar-link-project"
            to={`/projects/${this.props.project.id}`}>
            {this.props.project.name}
          </Link>
          <a className="sidebar-ellipsis"><FaIconPack.FaEllipsisH/></a>
        </div>
      </div>
    );
  }
}

export default ProjectSidebarIndex;
