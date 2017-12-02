import React from 'react';
import { Link, Router, Redirect, withRouter } from 'react-router-dom';

class EditProjectModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.project.id,
      name: this.props.project.name,
      description: this.props.project.description,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickOff = this.handleClickOff.bind(this);
  }

  componentWillMount () {
    document.title = "Ashai - Edit Project";
    this.props.removeAllProjectModalErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.requestUpdateToProject(this.state)
    .then(this.props.closeEditProjectModal);
  }

  handleClickOff(e) {
    if (e.target.className === "root-modal-container" ||
        e.target.className === "modal-cancel") {
      e.preventDefault();
      this.props.closeEditProjectModal();
    }
  }

  renderErrors() {
    if (this.props.errors.modal.length > 0) {
      return(
        <div className="session-errors-list">
          {this.props.errors.modal.map((error, i) => (
            <p className="session-error"
              key={`error-${i}`}>
              {error}
            </p>
          ))}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="root-modal-container"
        onClick={this.handleClickOff}>
        <div className="modal-form-container">
          <div className="modal-header-container">
            <h2 className="modal-form-header
              modal-edit-header">Update Project</h2>
          </div>
          <br></br>
          <div className="errors-fixed-container-login">
            {this.renderErrors()}
          </div>
          <form className="modal-form">

            <label>PROJECT NAME</label>
            <br></br>

            <input
              type="text"
              value={this.state.name}
              onChange={this.handleInput('name')}
              />
            <br></br>

            <label>DESCRIPTION</label>
            <br></br>
            <textarea
              type="textarea"
              value={this.state.description}
              onChange={this.handleInput('description')}
              />
            <br></br>
            <div className="submit-options">
              <button className="modal-cancel"
                onClick={this.handleClickOff}>
                Cancel</button>
              <button className="modal-form-submit modal-form-submit-valid"
                  onClick={this.handleSubmit}>Update</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(EditProjectModal);
