import React from 'react';
import { Link, Router } from 'react-router-dom';
import AddMembersSearchContainer from
  '../searches/add_members_search_container';
import Modal from 'react-modal';


class TeamSidebarProfiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addMembersModalOpen: false
    };
    this.openAddMembersModal = this.openAddMembersModal.bind(this);
    this.closeAddMembersModal = this.closeAddMembersModal.bind(this);
  }

  openAddMembersModal() {
    this.setState({ addMembersModalOpen: true });
  }
  closeAddMembersModal() {
    this.setState({ addMembersModalOpen: false });
  }

  render() {
    return (
      <div className="sidebar-profiles">
        {
          this.props.members.slice(0, 5).map(
            member => <Link to={`/users/${member.id}`}
            key={Math.random()}>
            <img className="sidebar-profile-image"
              key={Math.random()}
              src={member.profile_image_url}/>
            </Link>
          )
        }
        <a className="sidebar-new-member-button"
          onClick={this.openAddMembersModal}>+</a>
        <Modal
          isOpen={this.state.addMembersModalOpen}
          onRequestClose={this.closeAddMembersModal}
          overlayClassName={
            {base: "root-modal-container-invisible",
              afterOpen: "root-modal-container-invisible",
              beforeClose: "root-modal-container-invisible"}
            }
          className={
            { base: "override-content-default",
              afterOpen: "override-content-default",
              beforeClose: "override-content-default"}
            }>
            <AddMembersSearchContainer
              closeAddMembersModal={this.closeAddMembersModal}
              parent={"Sidebar"}
              group={this.props.team}/>
        </Modal>
      </div>
    );
  }
}

export default TeamSidebarProfiles;
