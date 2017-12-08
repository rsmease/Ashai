import React from 'react';
import UserOptionsIndexItem from './user_options_index_item';
import OnClickOutside from 'react-onclickoutside';
import Modal from 'react-modal';
import EditUserModalContainer from '../modals/edit_user_modal_container';

class UserOptionsIndex extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      editUserModalOpen: false
    };

    this.openEditUserModal = this.openEditUserModal.bind(this);
    this.closeEditUserModal = this.closeEditUserModal.bind(this);
  }

  openEditUserModal() {
    this.setState({ editUserModalOpen: true });
    this.props.closeUserOptions();
  }

  closeEditUserModal() {
    this.setState({ editUserModalOpen: false });
    this.props.closeUserOptions();
    document.title = "Ashai";
  }

  handleClickOutside() {
    this.props.closeUserOptions();
  }

  render() {
    return(<div className="nav-user-options">
    <UserOptionsIndexItem
      action={this.openEditUserModal}
      actionName="My Profile Settings..."/>
      <UserOptionsIndexItem
        action={this.props.logout}
        actionName="Logout"/>

      <Modal
        isOpen={this.state.editUserModalOpen}
        onRequestClose={this.closeEditUserModal}
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
        <EditUserModalContainer
          closeEditUserModal={this.closeEditUserModal}/>
      </Modal>
    </div>);
  }
}

export default OnClickOutside(UserOptionsIndex);
