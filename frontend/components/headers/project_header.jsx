import React from 'react';
import { Link, Router, Redirect, withRouter } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';
import Modal from 'react-modal';
import OptionsModal from '../modals/options_modal';

class ProjectHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      optionsModalOpen: false
    };

    this.openOptionsModal = this.openOptionsModal.bind(this);
    this.closeOptionsModal = this.closeOptionsModal.bind(this);
  }

  openOptionsModal() {
    this.setState({ optionsModalOpen: true });
  }
  closeOptionsModal() {
    this.setState({ optionsModalOpen: false });
  }

  renderProjectHeader() {
    if (this.props.project) {
      return (<div className="home-header task-header-secondary project-header">
      <div className="home-header-options">
      </div>
        <div className="home-header-content-container">
          <h1 className="secondary-header-title project-header-title">
            {this.props.project.name}</h1>
        </div>
        <div className="home-header-options">
          <MaterialDesign.MdExpandMore
            className="home-header-options-dropdown"
            onClick={this.openOptionsModal}/>
        </div>
        <Modal
          isOpen={this.state.optionsModalOpen}
          onRequestClose={this.closeOptionsModal}
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
            <OptionsModal
              closeOptionsModal={this.closeOptionsModal}
              project={this.props.project}
              currentUser={this.props.currentUser}/>
        </Modal>
      </div>);
    } else {
      return(
        <div className="home-header task-header-secondary"></div>
      );
    }
  }

  componentDidMount() {
    this.props.requestProject(this.props.projectId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.projectId !== newProps.projectId) {
      this.props.requestProject(newProps.projectId);
    }
  }

  render() {
    return (
      <div>
        {this.renderProjectHeader()}
      </div>
    );
  }
}

export default withRouter(ProjectHeader);
