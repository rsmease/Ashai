import React from 'react';
import HeaderAddDropdownItem from './header_add_dropdown_item';
import OnClickOutside from 'react-onclickoutside';
import Modal from 'react-modal';
import NewProjectModalContainer from '../modals/new_project_modal_container';

class HeaderAddDropdown extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      newProjectModalOpen: false
    };

    this.openNewProjectModal = this.openNewProjectModal.bind(this);
    this.closeNewProjectModal = this.closeNewProjectModal.bind(this);
  }

  openNewProjectModal() {
    this.setState({ newProjectModalOpen: true });
  }

  closeNewProjectModal() {
    this.setState({ newProjectModalOpen: false });
    this.props.closeAddDropdown();
    document.title = "Ashai";
  }

  // handleClickOutside() {
  //   this.props.closeAddDropdown();
  // }

  render() {
    return(<div className="nav-add-dropdown-wrapper">
      <div className="arrow-up"></div>
      <div className="nav-add-dropdown">
        <HeaderAddDropdownItem
          action={() => console.log("This feature is in development.")}
          actionName="New Task"/>
        <HeaderAddDropdownItem
          action={this.openNewProjectModal}
          actionName="New Project"/>

        <Modal
          isOpen={this.state.newProjectModalOpen}
          onRequestClose={this.closeNewProjectModal}
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
              <NewProjectModalContainer
                closeNewProjectModal={this.closeNewProjectModal}/>
            </Modal>
          </div>
        </div>);
  }
}

export default OnClickOutside(HeaderAddDropdown);
