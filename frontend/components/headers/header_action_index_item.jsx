//utils
import React from 'react';
import Modal from 'react-modal';
import * as MaterialDesign from 'react-icons/lib/md';
import { Router, Link, WithRouter } from 'react-router-dom';

//components 
import GroupModalContainer from '../modals/group_modal_container';

class HeaderActionIndexItem extends React.Component {
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
        this.props.closeDropdown();
    }

    toggleAction() {
        return this.props.modalAction ? this.openModal : this.props.otherAction;
    }

    showModalContent() {
        switch (this.props.actionTitle) {
            case "New Project":
                return (<GroupModalContainer
                    closeModal={this.closeModal}
                    targetGroup={undefined}
                    modalAction="new"
                    groupType="project" />);
            default:
                break;
        }
    }

    showAffordance() {
        switch (this.props.actionTitle) {
            case "New Project":
                return <MaterialDesign.MdAssignmentTurnedIn
                    className="add-item-icon" />;
            case "New Task":
                return <MaterialDesign.MdCheckCircle
                    className="add-item-icon" />;
            default:
                return undefined;
        }
    }

    render() {
        return (<div className="nav-add-item-container"
            onClick={this.toggleAction()}>
            {this.showAffordance()}
            <p className="nav-add-title">{this.props.actionTitle}</p>
            <Modal
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
                {this.showModalContent()}
            </Modal>
        </div>);
    }
}

export default HeaderActionIndexItem;