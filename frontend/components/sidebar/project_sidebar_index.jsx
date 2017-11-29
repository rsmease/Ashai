import React from 'react';
import { Link, Router } from 'react-router-dom';
import SidebarOptionsPopup from './sidebar_options_popup';
import * as MaterialDesign from 'react-icons/lib/md';

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
          <div className="sidebar-tools">
            <MaterialDesign.MdCreate
              className="sidebar-tool"/>
            <MaterialDesign.MdDelete
              className="sidebar-tool"
              onClick={
                this.props.requestToDeleteProject(this.props.project.id)
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectSidebarIndex;
