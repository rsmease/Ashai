import React from 'react';
import { Link, Router, Redirect, withRouter } from 'react-router-dom';
import OnClickOutside from 'react-onclickoutside';
import * as MaterialDesign from 'react-icons/lib/md';

class NewProjectModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
    this.validNewProject = false;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickOff = this.handleClickOff.bind(this);
  }

  componentWillMount () {
    document.title = "Ashai - New Project";
    this.props.removeAllProjectModalErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewProject(this.state)
    .then(this.props.closeNewProjectModal);
  }

  handleKeyUp(e) {
    if (this.state.name.length > 0) {
      this.validNewProject = true;
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

  handleClickOff(e) {
    if (e.target.className === "root-modal-container" ||
        e.target.className === "modal-close" ||
        e.target.className === "modal-cancel") {
      e.preventDefault();
      this.props.closeNewProjectModal();
    }
  }

  render() {
    return (
      <div className="root-modal-container"
        onClick={this.handleClickOff}>
        <img className="new-modal-logo"
          src="https://i.imgur.com/WcrVoLW.png" />
        <div className="modal-form-container">
          <div className="modal-header-container">
            <h2 className="modal-form-header">New Project</h2>
          </div>
          <br></br>
          <div className="errors-fixed-container-login">
            {this.renderErrors()}
          </div>
          <form className="modal-form">

            <label>PROJECT NAME</label>
            <br></br>

            <input
              onKeyUp={(e) => this.handleKeyUp(e)}
              type="text"
              value={this.state.name}
              onChange={this.handleInput('name')}
              />
            <br></br>

            <label>DESCRIPTION</label>
            <br></br>
            <textarea
              onKeyUp={(e) => this.handleKeyUp(e)}
              type="textarea"
              value={this.state.description}
              onChange={this.handleInput('description')}
              />
            <br></br>
            <div className="submit-options">
              <button className="modal-cancel"
                onClick={this.handleClickOff}>
                Cancel</button>
              <button className={
                  this.validNewProject === true ? "modal-form-submit modal-form-submit-valid" :
                  "modal-form-submit"}
                  onClick={this.handleSubmit}>Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(NewProjectModal);
