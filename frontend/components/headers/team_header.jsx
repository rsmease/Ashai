import React from 'react';
import { Link, Router, Redirect, withRouter } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';
import Modal from 'react-modal';
import OptionsModal from '../modals/options_modal';

class TeamHeader extends React.Component {
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

  renderTeamHeader() {
    if (this.props.team) {
      return (<div className="home-header task-header-secondary">
          <div className="home-header-options">
          </div>
          <div className="home-header-content-container">
            <h1 className="secondary-header-title">
              {this.props.team.name}</h1>
          </div>
          <div className="home-header-options">
            <MaterialDesign.MdExpandMore
              className="home-header-options-dropdown"
              onClick={this.openOptionsModal}/>
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
                  requestUpdateToTeam={this.props.requestUpdateToTeam}
                  requestToDeleteTeam={this.props.requestToDeleteTeam}
                  closeOptionsModal={this.closeOptionsModal}
                  team={this.props.team}
                  currentUser={this.props.currentUser}/>
            </Modal>
          </div>
      </div>);
    } else {
      return(
        <div className="home-header task-header-secondary"></div>
      );
    }
  }

  componentDidMount() {
    this.props.requestTeam(this.props.teamId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.teamId !== newProps.teamId) {
      this.props.requestTeam(newProps.teamId);
    }
  }

  render() {
    return (
      <div>
        {this.renderTeamHeader()}
      </div>
    );
  }
}

export default withRouter(TeamHeader);
