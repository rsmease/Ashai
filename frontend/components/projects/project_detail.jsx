import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';
import ProjectMembersIndex from './project_members_index';
import AddMembersSearchContainer from
  '../searches/add_members_search_container';
import Modal from 'react-modal';
import * as MaterialDesign from 'react-icons/lib/md'

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addMembersModalOpen: false
    }
    this.projectMembersWithoutCurrentUser =
      this.projectMembersWithoutCurrentUser.bind(this);
    this.openAddMembersModal = this.openAddMembersModal.bind(this);
    this.closeAddMembersModal = this.closeAddMembersModal.bind(this);
  }

  openAddMembersModal() {
    this.setState({ addMembersModalOpen: true });
  }
  closeAddMembersModal() {
    this.setState({ addMembersModalOpen: false });
  }


  projectMembersWithoutCurrentUser() {
    return this.props.project.members.filter(member => {
      return member.id !== this.props.currentUser.id;
    });
  }

  render() {
    return(
      <div className="project-detail-wrapper">
        <div className="project-members">
          <h4 className="project-description-title">Members</h4>
          <ProjectMembersIndex
            currentUser={this.props.currentUser}
            members={this.projectMembersWithoutCurrentUser()}/>
            <div>
                <MaterialDesign.MdPersonAdd
                  className="project-new-member-button"
                  onClick={this.openAddMembersModal}/>
            </div>
          <Modal
            isOpen={this.state.addMembersModalOpen}
            onRequestClose={this.closeAddMembersModal}
            overlayClassName={
              {base: "root-modal-container-invisible",
                afterOpen: "root-modal-container-invisible",
                beforeClose: "root-modal-container-invisible"}
              }
            className={
              { base: "override-content-default",
                afterOpen: "override-content-default",
                beforeClose: "override-content-default"}
              }>
              <AddMembersSearchContainer
                closeAddMembersModal={this.closeAddMembersModal}
                parent={"ProjectDetail"}
                group={this.props.project}/>
            </Modal>
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
