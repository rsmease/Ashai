import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';
import Modal from 'react-modal';
import EditProjectModalContainer from '../modals/edit_project_modal_container';

class ProjectSidebarIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editProjectModalOpen: false
    };

    this.openEditProjectModal = this.openEditProjectModal.bind(this);
    this.closeEditProjectModal = this.closeEditProjectModal.bind(this);
    this.returnToHome = this.returnToHome.bind(this);
  }

  openEditProjectModal() {
    this.setState({ editProjectModalOpen: true });
  }
  closeEditProjectModal() {
    this.setState({ editProjectModalOpen: false });
    document.title = "Ashai";
  }

  returnToHome(deletedProjectId) {
    if (this.props.history.location.pathname ===
      `/projects/${deletedProjectId}`) {
      this.props.history.push("/app");
    }
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
              className="sidebar-tool"
              onClick={this.openEditProjectModal}/>
            <Modal
              isOpen={this.state.editProjectModalOpen}
              onRequestClose={this.closeEditProjectModal}
              overlayClassName={
                {base: "root-modal-container",
                  afterOpen: "root-modal-container",
                  beforeClose: "root-modal-container"}
                }
              className={
                { base: "override-content-default",
                  afterOpen: "override-content-default",
                  beforeClose: "override-content-default"}
                }>
              <EditProjectModalContainer
                project={this.props.project}
                closeEditProjectModal={this.closeEditProjectModal}/>
            </Modal>
            <MaterialDesign.MdDelete
              className="sidebar-tool"
              onClick={
                () => this.props.requestToDeleteProject(this.props.project.id)
                .then(this.returnToHome(this.props.project.id))
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectSidebarIndex);
