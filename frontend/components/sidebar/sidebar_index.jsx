//utils
import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';
import _ from 'lodash';

//modals
import Modal from 'react-modal';
import GroupModalContainer from '../modals/group_modal_container';
import SidebarGroupIndex from './sidebar_group_index';

class SidebarIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    getTitle() {
        return `My ${_.capitalize(this.props.groupType)}s`;
    }

    openModal() {
        this.setState({ modalOpen: true });
    }

    closeModal() {
        this.setState({ modalOpen: false });
    }

    showModal() {
        return <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
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
                closeModal={this.closeModal}
                targetGroup={undefined}
                modalAction="new"
                groupType={this.props.groupType} />
        </Modal>;
    }


    render() {
        return (
            <section className="sidebar-section">
                <header className="sidebar-index-header">
                    <h3 className="sidebar-title">{this.getTitle()}</h3>
                    <MaterialDesign.MdAddCircleOutline
                        className="sidebar-new-button"
                        onClick={this.openModal} />
                    {this.showModal()}
                </header>
                <SidebarGroupIndex
                    currentUser={this.props.currentUser}
                    groups={this.props.currentUserGroups}
                    groupType={this.props.groupType} />
            </section>
        );
    }
}

export default withRouter(SidebarIndex);
