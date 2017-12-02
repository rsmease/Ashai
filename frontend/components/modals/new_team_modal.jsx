import React from 'react';
import { Link, Router, Redirect, withRouter } from 'react-router-dom';

class NewTeamModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
    this.validNewTeam = false;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickOff = this.handleClickOff.bind(this);
  }

  componentWillMount () {
    document.title = "Ashai - New Team";
    this.props.removeAllTeamModalErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewTeam(this.state)
    .then(this.props.closeNewTeamModal);
  }

  handleKeyUp(e) {
    if (this.state.name.length > 0) {
      this.validNewTeam = true;
    }
  }

  handleClickOff(e) {
    if (e.target.className === "root-modal-container" ||
        e.target.className === "modal-cancel") {
      e.preventDefault();
      this.props.closeNewTeamModal();
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
        <img className="new-modal-logo"
          onClick={this.stopPropagation}
          src="https://i.imgur.com/WcrVoLW.png" />
        <div className="modal-form-container">
          <div className="modal-header-container">
            <h2 className="modal-form-header">New Team</h2>
          </div>
          <br></br>
          <div className="errors-fixed-container-login">
            {this.renderErrors()}
          </div>
          <form className="modal-form">

            <label>TEAM NAME</label>
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
                  this.validNewTeam === true ? "modal-form-submit modal-form-submit-valid" :
                  "modal-form-submit"}
                  onClick={this.handleSubmit}>Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(NewTeamModal);
