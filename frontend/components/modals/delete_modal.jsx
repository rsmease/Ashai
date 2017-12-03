import React from 'react';
import { Link, Router } from 'react-router-dom';

class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      entity: this.props.entity,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickOff = this.handleClickOff.bind(this);
  }

  componentWillMount () {
    document.title = `Asana - Delete ${this.state.entity}`;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onDelete();
  }

  handleClickOff(e) {
    if (e.target.className === "root-modal-container" ||
        e.target.className === "modal-cancel modal-cancel-delete") {
      e.preventDefault();
      this.props.closeDeleteModal();
    }
  }

  render() {
    return (
      <div className="root-modal-container"
        onClick={this.handleClickOff}>
        <div className="modal-form-container-delete">
          <h2 className="modal-form-header-delete">
            {`Delete ${this.state.entity}`}</h2>
          <div className="modal-form-warnings-container">
            <p className="modal-form-warning">
              Are you sure? This action cannot be undone.</p>
        </div>
          <div className="submit-options-delete">
            <button className="modal-cancel modal-cancel-delete"
              onClick={this.handleClickOff}>
              Cancel</button>
            <button className="modal-form-delete"
                onClick={this.handleSubmit}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteModal;
