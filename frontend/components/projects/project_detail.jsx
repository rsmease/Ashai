//utils
import React from 'react';
import Modal from 'react-modal';
import * as MaterialDesign from 'react-icons/lib/md';

//components
import ProjectMembersIndex from './project_members_index';
import AddMemberButton from '../searches/add_member_button';

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true });
  }
  closeModal() {
    this.setState({ modalOpen: false });
  }

  render() {
    return (
      <div className="project-detail">
        <div className="project-members-detail">
          <h4 className="project-detail-title">Members</h4>
          <ProjectMembersIndex
            members={this.props.project.members} />
          <AddMemberButton
            group={this.props.project}
            groupType={"project"}
            source={"project-detail"} />
        </div>
        <div className="project-description">
          <h4 className="project-detail-title">Description</h4>
          <p>{this.props.project.description}</p>
        </div>
      </div>
    );
  }
}

export default ProjectDetail;
