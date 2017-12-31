import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';
import ProjectMembersIndex from './project_members_index';
import AddMembersSearchContainer from
  '../searches/add_members_search_container';
import Modal from 'react-modal';
import * as MaterialDesign from 'react-icons/lib/md';

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
          <div>
            <MaterialDesign.MdPersonAdd
              className="project-new-member-button"
              onClick={this.openModal} />
          </div>
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            overlayClassName={
              {
                base: "root-modal-container-invisible",
                afterOpen: "root-modal-container-invisible",
                beforeClose: "root-modal-container-invisible"
              }
            }
            className={
              {
                base: "override-content-default",
                afterOpen: "override-content-default",
                beforeClose: "override-content-default"
              }
            }>
            <AddMembersSearchContainer
              closeModal={this.closeModal}
              parent={"ProjectDetail"}
              group={this.props.project} />
          </Modal>
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
