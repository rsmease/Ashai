import React from 'react';
import Modal from 'react-modal';
import * as MaterialDesign from 'react-icons/lib/md';

class NavigationHeaderAddPanel extends React.Component {
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
    }


    render() {
        return (
            <div className="add-task-header-container">
                <MaterialDesign.MdAddCircle
                    onClick={this.openModal}
                    className="add-task-header-button" />
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
                    <HeaderAddDropdownContainer
                        closeModal={this.closeModal}
                        currentUser={this.props.currentUser} />
                </Modal>
            </div>
        );
    }
}

export default NavigationHeaderAddPanel;