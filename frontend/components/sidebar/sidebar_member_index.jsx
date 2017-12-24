import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';
import TeamSidebarProfiles from './team_sidebar_profiles';
import * as MaterialDesign from 'react-icons/lib/md';
import Modal from 'react-modal';
import EditTeamModalContainer from '../modals/edit_team_modal_container';
import DeleteModal from '../modals/delete_modal';

class TeamSidebarIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editTeamModalOpen: false,
            deleteModalOpen: false
        };

        this.openEditTeamModal = this.openEditTeamModal.bind(this);
        this.closeEditTeamModal = this.closeEditTeamModal.bind(this);

        this.openDeleteModal = this.openDeleteModal.bind(this);
        this.closeDeleteModal = this.closeDeleteModal.bind(this);

        this.handleDelete = this.handleDelete.bind(this);
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

    openDeleteModal() {
        this.setState({ deleteModalOpen: true });
    }
    closeDeleteModal() {
        this.setState({ deleteModalOpen: false });
        document.title = "Ashai";
    }

    handleDelete(e) {
        this.props.requestToDeleteTeam(this.props.team.id)
            .then(this.closeDeleteModal())
            .then(this.returnToHome(this.props.team.id));
    }

    returnToHome(deletedTeamId) {
        if (this.props.history.location.pathname ===
            `/teams/${deletedTeamId}`) {
            this.props.history.push("/app");
        }
    }

    renderSidebarTools() {
        if (this.props.currentUser.id === this.props.team.team_owner_id) {
            return <div className="sidebar-tools-team">
                <MaterialDesign.MdCreate
                    className="sidebar-tool"
                    onClick={this.openEditTeamModal} />
                <Modal
                    isOpen={this.state.editTeamModalOpen}
                    onRequestClose={this.closeEditTeamModal}
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
                    <EditTeamModalContainer
                        closeEditTeamModal={this.closeEditTeamModal}
                        team={this.props.team} />
                </Modal>
                <MaterialDesign.MdDelete
                    className="sidebar-tool"
                    onClick={this.openDeleteModal}
                />
                <Modal
                    isOpen={this.state.deleteModalOpen}
                    onRequestClose={this.closeDeleteModal}
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
                    <DeleteModal
                        id={this.props.team.id}
                        entity={"Team"}
                        closeDeleteModal={this.closeDeleteModal}
                        onDelete={this.handleDelete} />
                </Modal>
            </div>;
        } else {
            return <div></div>;
        }
    }

    render() {
        return (
            <div className="sidebar-group-index">
                <TeamSidebarProfiles
                    team={this.props.team}
                    members={this.props.team.members} />
                <div className="sidebar-group-index-item">
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