import React from 'react';
import Modal from 'react-modal';
import * as MaterialDesign from 'react-icons/lib/md';
import { Link, Router, withRouter } from 'react-router-dom';

import GroupModalContainer from '../modals/group_modal_container';

class SidebarOwnerTools extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editModalOpen: false,
            deleteModalOpen: false
        };

        this.openeditModal = this.openeditModal.bind(this);
        this.closeEditModal = this.closeEditModal.bind(this);

        this.openDeleteModal = this.openDeleteModal.bind(this);
        this.closeDeleteModal = this.closeDeleteModal.bind(this);

        this.handleDelete = this.handleDelete.bind(this);
        this.returnToHome = this.returnToHome.bind(this);
    }

    //separate open/close actions to prevent overlap of modal calls
    //open and close for edit modal
    openeditModal() {
        this.setState({ editModalOpen: true });
    }
    closeEditModal() {
        this.setState({ editModalOpen: false });
        document.title = "Ashai";
    }

    //open and close for delete modal
    openDeleteModal() {
        this.setState({ deleteModalOpen: true });
    }
    closeDeleteModal() {
        this.setState({ deleteModalOpen: false });
        document.title = "Ashai";
    }

    handleDelete(e) {
        this.props.requestToDeleteGroup(this.props.group.id)
            .then(this.closeDeleteModal())
            .then(this.returnToHome(this.props.group.id));
    }

    //return to home if user current viewing deleted group page
    returnToHome(deletedGroupId) {
        if (this.props.history.location.pathname ===
            `/${this.props.groupType}s/${deletedGroupId}`) {
            this.props.history.push("/app");
        }
    }

    showEditModal() {
        return <Modal
            isOpen={this.state.editModalOpen}
            onRequestClose={this.closeEditModal}
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
            <GroupModalContainer
                closeModal={this.closeEditModal}
                targetGroup={this.props.group}
                modalAction="edit"
                groupType={this.props.groupType} />
        </Modal>;
    }

    showDeleteModal() {
        return <Modal
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
            <GroupModalContainer
                closeModal={this.closeDeleteModal}
                targetGroup={this.props.group}
                modalAction="delete"
                groupType={this.props.groupType} />
        </Modal>;
    }

    render() {
        return (
            <div className="sidebar-tools">
                <MaterialDesign.MdCreate
                    className="sidebar-tool"
                    onClick={this.openeditModal} />
                {this.showEditModal()}
                <MaterialDesign.MdDelete
                    className="sidebar-tool"
                    onClick={this.openDeleteModal}
                />
                {this.showDeleteModal()}
            </div>
        );
    }
}

export default withRouter(SidebarOwnerTools);