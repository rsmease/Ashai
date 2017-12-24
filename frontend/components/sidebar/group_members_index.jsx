import React from 'react';
import Modal from 'react-modal';
import { Link, Router } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';


//components
import GroupMembersIndexItem from './group_members_index_item';
import AddMembersSearchContainer from
    '../searches/add_members_search_container';


class GroupMembersIndex extends React.Component {
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
            <div className="sidebar-group-members-index">
                {
                    this.props.group.members.slice(0, 5).map((member) => (
                        <GroupMembersIndexItem
                            key={Math.random()}
                            member={member} />
                    ))
                }
                <MaterialDesign.MdPersonAdd
                    title="Add a New Member"
                    className="sidebar-new-member-button tool-tip"
                    onClick={this.openModal} />
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
                    <AddMembersSearchContainer
                        closeModal={this.closeModal}
                        parent="Sidebar"
                        group={this.props.group} />
                </Modal>
            </div>
        );
    }
}

export default GroupMembersIndex;