import React from 'react';
import { Link, Router, Redirect, withRouter } from 'react-router-dom';
import AddMembersSearchContainer from
  '../searches/add_members_search_container';
import ResultsIndex from '../searches/results_index';

class TransferOwnershipModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.group.id,
      name: this.props.group.name,
      description: this.props.group.description,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickOff = this.handleClickOff.bind(this);
  }

  componentWillMount() {
    document.title = "Ashai - Transfer Ownership";
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleClickOff(e) {
    if (e.target.className === "root-modal-container" ||
      e.target.className === "modal-cancel") {
      e.preventDefault();
      this.props.closeTransferOwnershipModal();
    }
  }


  render() {
    return (
      <div className="root-modal-container"
        onClick={this.handleClickOff}>
        <div className="modal-form-container">
          <div className="modal-header-container">
            <h2 className="modal-form-header
              modal-edit-header">Transfer Ownership</h2>
          </div>
          <ResultsIndex
            group={this.props.group}
            parent={this.props.parent}
            requestUpdateToTeam={this.props.requestUpdateToTeam}
            requestUpdateToProject={this.props.requestUpdateToProject}
            closeTransferOwnershipModal=
            {this.props.closeTransferOwnershipModal} />
          <form className="modal-form">
            <div className="submit-options">
              <button className="modal-cancel-centered"
                onClick={this.handleClickOff}>
                Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(TransferOwnershipModal);
