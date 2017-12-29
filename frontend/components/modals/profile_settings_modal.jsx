import React from 'react';
import { Link, Router, Redirect, withRouter } from 'react-router-dom';

class ProfileSettingsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.currentUser.id,
      name: this.props.currentUser.name,
      email: this.props.currentUser.email,
      bio: this.props.currentUser.bio,
      profile_image_url: this.props.currentUser.profile_image_url
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickOff = this.handleClickOff.bind(this);
  }

  componentWillMount() {
    document.title = "Ashai - Edit My Profile";
    this.props.removeAllUserModalErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.requestUpdateToUser(this.state)
      .then(this.props.closeEditUserModal);
  }

  handleClickOff(e) {
    e.preventDefault();
    if (e.target.className === "root-modal-container" ||
      e.target.className === "modal-cancel") {
      e.preventDefault();
      this.props.closeModal();
    }
  }

  renderErrors() {
    if (this.props.errors.modal.length > 0) {
      return (
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
          <div className="modal-header-container-user-update">
            <h2 className="modal-form-header
              modal-edit-header">Update Profile</h2>
            <img
              src={this.props.currentUser.profile_image_url}
              className="modal-header-profile"></img>
          </div>
          <br></br>
          <div className="errors-fixed-container-login">
            {this.renderErrors()}
          </div>
          <form className="modal-form">

            <label>NAME</label>
            <br></br>

            <input
              type="text"
              value={this.state.name}
              onChange={this.handleInput('name')}
            />
            <br></br>

            <label>EMAIL</label>
            <br></br>

            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
            <br></br>

            <label>PROFILE IMAGE URL</label>
            <br></br>

            <input
              type="text"
              value={this.state.profile_image_url}
              onChange={this.handleInput('profile_image_url')}
            />
            <br></br>

            <label>BIO</label>
            <br></br>
            <textarea
              type="textarea"
              value={this.state.bio}
              onChange={this.handleInput('bio')}
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

export default withRouter(ProfileSettingsModal);
