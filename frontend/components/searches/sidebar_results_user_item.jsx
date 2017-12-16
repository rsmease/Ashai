import React from 'react';
import { Router, Link, WithRouter } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';
import Highlighter from 'react-highlight-words';

class SidebarResultsUserItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddMember = this.handleAddMember.bind(this);
    this.handleTransferOwnership = this.handleTransferOwnership.bind(this);
  }

  renderActionButton() {
    if (this.props.parent === "TransferOwnership") {
      return <MaterialDesign.MdSwapHoriz
        className="member-add-button"
        onClick={this.handleTransferOwnership}/>;
    } else if (this.userIsMember()) {
      return <div></div>;
    } else {
      return <div>
        <MaterialDesign.MdPersonAdd
          className="member-add-button"
          onClick={this.handleAddMember}/>
      </div>;
    }
  }

  userIsMember() {
    if (this.props.group.members_by_id.indexOf(this.props.user.id) >= 0) {
      return true;
    } else {
      return false;
    }
  }

  handleAddMember(e) {
    if (this.props.group.project_owner_id === undefined ) {
      this.props.createNewTeamMembership(
        { member_id: this.props.user.id, team_id: this.props.group.id }
      );
    } else {
      this.props.createNewProjectMembership(
        { member_id: this.props.user.id, project_id: this.props.group.id }
      );
    }
  }

  handleTransferOwnership(e) {
    if (this.props.group.project_owner_id === undefined ) {
      this.props.requestUpdateToTeam(
        { id: this.props.group.id, team_owner_id: this.props.user.id }
      ).then(this.props.closeTransferOwnershipModal);
    } else {
      this.props.requestUpdateToProject(
        { id: this.props.group.id, project_owner_id: this.props.user.id }
      ).then(this.props.closeTransferOwnershipModal);
    }
  }


  render() {
    return(<div className="results-index-item-container
    add-members-item-container">
        <div className="search-result-unclickable">
          <img
            className="results-index-image"
            src={this.props.user.profile_image_url}></img>
          <div className="results-index-right-container">
            <Highlighter
              className="results-index-name"
              highlightClassName="results-index-bold results-index-underline"
              searchWords={[this.props.searchVal]}
              autoEscape={true}
              textToHighlight={this.props.user.name}/>
            <Highlighter
              className="results-index-context"
              highlightClassName="results-index-bold"
              searchWords={[this.props.searchVal]}
              autoEscape={true}
              textToHighlight={this.props.user.email}/>
          </div>
          <div className="member-action-div">
            {this.renderActionButton()}
          </div>
        </div>
    </div>);
  }
}

export default SidebarResultsUserItem;
