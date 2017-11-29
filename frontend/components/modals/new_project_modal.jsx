import React from 'react';
import { Link, Router, Redirect, withRouter } from 'react-router-dom';
import HorizontalLogoNamed from '../headers/horizontal_logo_named';
import { LoginFooter } from '../footers/footer';

class NewProjectModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
    this.validNewProject = false;
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <div className="root-modal-container">
        <img className="new-modal-logo"
          src="https://i.imgur.com/WcrVoLW.png" />
        <div className="modal-form-container">
          <h2 className="modal-form-header">New Project</h2>
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
                onClick={this.props.closeNewProjectModal}>
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


// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//     };
//     this.validNewProject = false;
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   componentWillMount () {
//     document.title = "Ashai - Log In";
//     this.props.removeAllErrors();
//   }
//
//   renderErrors() {
//     if (this.props.errors.session.length > 0) {
//       return(
//         <div className="session-errors-list">
//           {this.props.errors.session.map((error, i) => (
//             <p className="session-error"
//               key={`error-${i}`}>
//               {error}
//             </p>
//           ))}
//         </div>
//       );
//     }
//   }
//
//
//   handleInput(type) {
//     return (e) => {
//       this.setState({ [type]: e.target.value });
//     };
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.login(this.state);
//   }
//
//   handleKeyUp(e) {
//     if (this.state.email.length > 0) {
//       this.validNewProject = true;
//     }
//   }
//
//   render() {
//     return (
//       <div className="root-container">
//         <HorizontalLogoNamed />
//         <div className="modal-form-container">
//           <h2 className="modal-form-header">Log In</h2>
//           <br></br>
//           <div className="errors-fixed-container-login">
//             {this.renderErrors()}
//           </div>
//           <form className="modal-form">
//
//             <label>EMAIL ADDRESS</label>
//             <br></br>
//
//             <input
//               onKeyUp={(e) => this.handleKeyUp(e)}
//               type="text"
//               value={this.state.email}
//               onChange={this.handleInput('email')}
//               />
//             <br></br>
//
//             <label>PASSWORD</label>
//             <br></br>
//             <input
//               onKeyUp={(e) => this.handleKeyUp(e)}
//               type="password"
//               value={this.state.password}
//               onChange={this.handleInput('password')}
//               />
//             <br></br>
//             <div className="submit-options">
//               <button className="modal-form-submit session-demo">
//                 <Link to="/demo">Demo Login</Link></button>
//               <button className={
//                   this.validNewProject === true ? "modal-form-submit modal-form-submit-valid" :
//                   "modal-form-submit"}
//                   onClick={this.handleSubmit}>Log In</button>
//             </div>
//             </form>
//           </div>
//           <LoginFooter />
//       </div>
//     );
//   }
// }
