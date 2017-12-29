//utils
import _ from 'lodash'
import React from 'react';
import Modal from 'react-modal';
import * as MaterialDesign from 'react-icons/lib/md';
import { Router, Link, WithRouter } from 'react-router-dom';

//components 
import GroupModalContainer from '../modals/group_modal_container';
import UserModalContainer
    from '../modals/user_modal_container';

class HeaderActionIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        };
        this.toggleAction = this.toggleAction.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalOpen: true });
    }

    closeModal() {
        this.setState({ modalOpen: false });
    }

    toggleAction() {
        return this.props.modalAction ? this.openModal() : this.props.otherAction();
    }

    toggleDisplayClass() {
        if (this.props.actionTitle.includes("Delete")) {
            return `${this.props.source}-action-index-item-dangerous`;
        } else {
            return `${this.props.source}-action-index-item`;
        }
    }

    showModalContent() {
        switch (this.props.actionTitle) {
            case "New Project":
                return (<GroupModalContainer
                    closeModal={this.closeModal}
                    targetGroup={undefined}
                    modalAction="new"
                    groupType="project" />);
            case "My Profile Settings...":
                return (<UserModalContainer
                    closeModal={this.closeModal} />);
            case "Manage " + _.capitalize(this.props.entityType) + " Settings":
                return (<GroupModalContainer
                    closeModal={this.closeModal}
                    targetGroup={this.props.targetGroup}
                    modalAction="edit"
                    groupType={this.props.entityType} />);
            case "Delete " + _.capitalize(this.props.entityType):
                return (<GroupModalContainer
                    closeModal={this.closeModal}
                    targetGroup={this.props.targetGroup}
                    modalAction="delete"
                    groupType={this.props.entityType} />);
        }
    }

    showAffordance() {
        switch (this.props.actionTitle) {
            case "New Project":
                return <MaterialDesign.MdAssignmentTurnedIn
                    className="action-index-item-icon" />;
            case "New Task":
                return <MaterialDesign.MdCheckCircle
                    className="action-index-item-icon" />;
            default:
                return undefined;
        }
    }

    render() {
        return (<div className={this.toggleDisplayClass()}
            onClick={this.toggleAction}>
            {this.showAffordance()}
            <p className="action-index-item-title">{this.props.actionTitle}</p>
            <Modal
                isOpen={this.state.modalOpen}
                onAfterOpen={this.props.toggleDropdown}
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
                {this.showModalContent()}
            </Modal>
        </div>);
    }
}

export default HeaderActionIndexItem;