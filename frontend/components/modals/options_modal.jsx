import React from 'react';
import UserOptionsIndexItem from '../headers/user_options_index_item';
import Modal from 'react-modal';

class OptionsModal extends React.Component  {
  constructor(props) {
    super(props);
  }

  handleClickOff() {
    this.props.closeUserOptions();
  }

  renderOptions() {
    if (this.props.team === undefined) {
      return this.renderProjectOwnerSettings();
    } else
      return this.renderTeamOwnerSettings();
  }

  renderTeamOwnerSettings() {
    console.log("TEAM OPTIONS");
    if (this.props.currentUser.id === this.props.team.team_owner_id) {
    return <div>
      <UserOptionsIndexItem
        action={() => undefined}
        actionName="Manage Team Settings"/>
      <UserOptionsIndexItem
        action={() => undefined}
        actionName="Transfer Team Ownership"/>
      <UserOptionsIndexItem
        className="header-options-delete"
        action={() => undefined}
        actionName="Delete Team"/>
    </div>;
    } else {
      return <UserOptionsIndexItem
        action={() => undefined}
        actionName="Leave Team"/>;
    }
  }

  renderProjectOwnerSettings() {
    if (this.props.currentUser.id === this.props.project.project_owner_id) {
    return <div>
      <UserOptionsIndexItem
        action={() => undefined}
        actionName="Manage Project Settings"/>
      <UserOptionsIndexItem
        action={() => undefined}
        actionName="Transfer Project Ownership"/>
      <UserOptionsIndexItem
        className="header-options-delete"
        action={() => undefined}
        actionName="Delete Project"/>
    </div>;
    } else {
      return <UserOptionsIndexItem
        action={() => undefined}
        actionName="Leave Project"/>;
    }
  }


  render() {
    return(<div className="home-header-options-modal">
    <UserOptionsIndexItem
      action={() => undefined}
      actionName="Add Members"/>
    {this.renderOptions()}
    </div>);
  }
}

export default OptionsModal;
