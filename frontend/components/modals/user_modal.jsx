import React from 'react';
import { withRouter } from 'react-router-dom';

class UserModal extends React.Component {
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
      .then(this.props.closeModal);
  }

  handleClickOff(e) {
    e.preventDefault();
    if (e.target.className === "root-modal-container" ||
      e.target.className === "modal-cancel") {
      e.preventDefault();
      this.props.closeModal();
    }
  }

  filteredErrors(labelName) {
    return this.props.errors.modal.filter((error) => (
      error.toLowerCase().includes(labelName)
    ));
  }

  showErrors(labelName, displayClass) {
    if (this.props.errors.modal.length > 0) {
      return (
        this.filteredErrors(labelName).map((error, i) => (
          <span key={i} className={displayClass}>{error}</span>
        ))
      );
    }
  }

  render() {
    return (
      <div className="root-modal-container"
        onClick={this.handleClickOff}>
        <div className="modal-form-container">
          <div className="modal-header-container">
            <h2 className="modal-form-header">Update Profile</h2>
            <img
              src={this.props.currentUser.profile_image_url}
              className="modal-header-profile-image"></img>
          </div>
          <form className="modal-form">

            <label>NAME</label>
            {this.showErrors("name", "session-error")}

            <input
              type="text"
              value={this.state.name}
              onChange={this.handleInput('name')}
            />

            <label>EMAIL</label>
            {this.showErrors("email", "session-error")}

            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
            <br></br>

            <label>PROFILE IMAGE URL</label>
            {this.showErrors("image", "session-error")}

            <input
              type="text"
              value={this.state.profile_image_url}
              onChange={this.handleInput('profile_image_url')}
            />

            <label>BIO</label>
            {this.showErrors("bio", "session-error")}
            <textarea
              type="textarea"
              value={this.state.bio}
              onChange={this.handleInput('bio')}
            />

            <div className="modal-submit-options">
              <button className="modal-cancel"
                onClick={this.handleClickOff}>
                Cancel</button>
              <button className="modal-form-submit-valid"
                onClick={this.handleSubmit}>Update</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(UserModal);
