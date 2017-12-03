import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';
import Modal from 'react-modal';
import EditProjectModalContainer from '../modals/edit_project_modal_container';
import DeleteModal from '../modals/delete_modal';

class ProjectSidebarIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editProjectModalOpen: false,
      deleteModalOpen: false
    };

    this.openEditProjectModal = this.openEditProjectModal.bind(this);
    this.closeEditProjectModal = this.closeEditProjectModal.bind(this);

    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);

    this.handleDelete = this.handleDelete.bind(this);
    this.returnToHome = this.returnToHome.bind(this);
    this.renderSidebarTools = this.renderSidebarTools.bind(this);
  }

  openEditProjectModal() {
    this.setState({ editProjectModalOpen: true });
  }
  closeEditProjectModal() {
    this.setState({ editProjectModalOpen: false });
    document.title = "Ashai";
  }

  openDeleteModal() {
    this.setState({ deleteModalOpen: true });
  }
  closeDeleteModal() {
    this.setState({ deleteModalOpen: false });
    document.title = "Ashai";
  }

  handleDelete(e) {
    this.props.requestToDeleteProject(this.props.project.id)
    .then(this.closeDeleteModal())
    .then(this.returnToHome(this.props.project.id));
  }

  returnToHome(deletedProjectId) {
    if (this.props.history.location.pathname ===
      `/projects/${deletedProjectId}`) {
      this.props.history.push("/app");
    }
  }

  renderSidebarTools() {
    if (this.props.currentUser.id === this.props.project.project_owner_id) {
      return <div className="sidebar-tools">
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
          onClick={this.openDeleteModal}
        />
        <Modal
          isOpen={this.state.deleteModalOpen}
          onRequestClose={this.closeDeleteModal}
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
          <DeleteModal
            id={this.props.project.id}
            entity={"Project"}
            closeDeleteModal={this.closeDeleteModal}
            onDelete={this.handleDelete}/>
        </Modal>
      </div>;
    } else {
      return <div></div>;
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
          {this.renderSidebarTools()}
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectSidebarIndex);
