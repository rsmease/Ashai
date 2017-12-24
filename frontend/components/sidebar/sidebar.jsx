import React from 'react';
import { Link, Router } from 'react-router-dom';
import MiniHorizontalLogoNamed from './mini_logo';
import TeamSidebarIndex from './team_sidebar_index';
import ProjectSidebarIndex from './project_sidebar_index';
import Modal from 'react-modal';
import NewProjectModalContainer from '../modals/new_project_modal_container';
import NewTeamModalContainer from '../modals/new_team_modal_container';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newProjectModalOpen: false,
      newTeamModalOpen: false,
      foo: 0
    };

    this.openNewProjectModal = this.openNewProjectModal.bind(this);
    this.openNewTeamModal = this.openNewTeamModal.bind(this);

    this.closeNewProjectModal = this.closeNewProjectModal.bind(this);
    this.closeNewTeamModal = this.closeNewTeamModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('#root');
  }

  componentWillReceiveProps(nextProps) {
    console.log("Update to sidebar state.")
    console.log(nextProps);
  }

  renderTeams() {
    return (
      <div className="sidebar-list-container">
        {
          this.props.currentUser.teams.map(
            team =>
              <TeamSidebarIndex
                key={Math.random()}
                currentUser={this.props.currentUser}
                team={team}
                requestToDeleteTeam={this.props.requestToDeleteTeam} />
          )
        }
      </div>
    );
  }

  renderProjects() {
    return (
      <div className="sidebar-list-container">
        {
          this.props.currentUser.projects.map(
            project =>
              <ProjectSidebarIndex
                key={Math.random()}
                currentUser={this.props.currentUser}
                project={project}
                requestToDeleteProject={this.props.requestToDeleteProject} />
          )
        }
      </div>
    );
  }

  openNewProjectModal() {
    this.setState({ newProjectModalOpen: true });
  }
  openNewTeamModal() {
    this.setState({ newTeamModalOpen: true });
  }

  closeNewProjectModal() {
    this.setState({ newProjectModalOpen: false });
    document.title = "Ashai";
  }
  closeNewTeamModal() {
    this.setState({ newTeamModalOpen: false });
    document.title = "Ashai";
  }


  render() {
    return (
      <div className="sidebar">
        <MiniHorizontalLogoNamed />
        <div className="sidebar-sections-container">

          <div className="sidebar-section">
            <div className="sidebar-index-header">
              <h3 className="sidebar-title">My Teams</h3>
              <a className="sidebar-new-project-button"
                onClick={this.openNewTeamModal}>+</a>
            </div>
            {this.renderTeams()}
            <Modal
              isOpen={this.state.newTeamModalOpen}
              onRequestClose={this.closeNewTeamModal}
              overlayClassName={
                {
                  base: "root-modal-container",
                  afterOpen: "root-modal-container",
                  beforeClose: "root-modal-container"
                }
              }
              className={
                {
                  base: "override-content-default",
                  afterOpen: "override-content-default",
                  beforeClose: "override-content-default"
                }
              }>
              <NewTeamModalContainer
                closeNewTeamModal={this.closeNewTeamModal} />
            </Modal>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-index-header">
              <h3 className="sidebar-title">My Projects</h3>
              <a className="sidebar-new-project-button"
                onClick={this.openNewProjectModal}>+</a>
            </div>
            {this.renderProjects()}
            <Modal
              isOpen={this.state.newProjectModalOpen}
              onRequestClose={this.closeNewProjectModal}
              overlayClassName={
                {
                  base: "root-modal-container",
                  afterOpen: "root-modal-container",
                  beforeClose: "root-modal-container"
                }
              }
              className={
                {
                  base: "override-content-default",
                  afterOpen: "override-content-default",
                  beforeClose: "override-content-default"
                }
              }>
              <NewProjectModalContainer
                closeNewProjectModal={this.closeNewProjectModal} />
            </Modal>
          </div>

        </div>
      </div>
    );
  }
}

export default Sidebar;
