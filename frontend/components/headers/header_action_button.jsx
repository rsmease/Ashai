import React from 'react';
import Modal from 'react-modal';
import * as MaterialDesign from 'react-icons/lib/md';
import { Router, Link, WithRouter } from 'react-router-dom';

import HeaderActionIndexContainer from './header_action_index_container';

class HeaderActionButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
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

    showAffordanceIcon() {
        if (this.props.source === "global-header-left") {
            return <MaterialDesign.MdAddCircle
                className="add-task-header-button"
                onClick={this.openModal} />;
        }
    }

    render() {
        return (<div className="add-task-header-container">
            {this.showAffordanceIcon()}
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
                <HeaderActionIndexContainer
                    closeModal={this.closeModal}
                    source={this.props.source} />
            </Modal>
        </div>);
    }
}

export default HeaderActionButton;