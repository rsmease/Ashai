import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';
import ProjectMembersIndex from './project_members_index';

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="project-detail-wrapper">
        <div className="project-members">
          <h4 className="project-description-title">Members</h4>
          <ProjectMembersIndex members={this.props.project.members}/>
        </div>
        <div className="project-description">
          <h4 className="project-description-title">Description</h4>
          <p>{this.props.project.description}</p>
        </div>
      </div>
    );
  }
}

export default ProjectDetail;
