import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';
import TeamSidebarProfiles from './team_sidebar_profiles';
import * as MaterialDesign from 'react-icons/lib/md';
import Modal from 'react-modal';
import EditTeamModalContainer from '../modals/edit_team_modal_container';

class TeamSidebarIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editTeamModalOpen: false
    };

    this.openEditTeamModal = this.openEditTeamModal.bind(this);
    this.closeEditTeamModal = this.closeEditTeamModal.bind(this);

    this.returnToHome = this.returnToHome.bind(this);
    this.renderSidebarTools = this.renderSidebarTools.bind(this);
  }

  openEditTeamModal() {
    this.setState({ editTeamModalOpen: true });
  }
  closeEditTeamModal() {
    this.setState({ editTeamModalOpen: false });
    document.title = "Ashai";
  }

  returnToHome(deletedTeamId) {
    if (this.props.history.location.pathname ===
      `/teams/${deletedTeamId}`) {
      this.props.history.push("/app");
    }
  }

  renderSidebarTools() {
    console.log(this.props.currentUser);
    console.log(this.props.team);
    if (this.props.currentUser.id === this.props.team.team_owner_id) {
      return <div className="sidebar-tools-team">
          <MaterialDesign.MdCreate
            className="sidebar-tool"
            onClick={this.openEditTeamModal}/>
          <Modal
            isOpen={this.state.editTeamModalOpen}
            onRequestClose={this.closeEditTeamModal}
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
                <EditTeamModalContainer
                  closeEditTeamModal={this.closeEditTeamModal}
                  team={this.props.team}/>
              </Modal>
            <MaterialDesign.MdDelete
              className="sidebar-tool"
              onClick={
                () => this.props.requestToDeleteTeam(this.props.team.id)
                .then(this.returnToHome(this.props.team.id))
              }
            />
        </div>;
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div className="sidebar-link-list">
        <TeamSidebarProfiles members={this.props.team.members}/>
        <div className="sidebar-link-list-item">
          <Link
            className="sidebar-link-project"
            to={`/teams/${this.props.team.id}`}>
            {this.props.team.name}
          </Link>
          {this.renderSidebarTools()}
        </div>
      </div>
    );
  }
}

export default withRouter(TeamSidebarIndex);
