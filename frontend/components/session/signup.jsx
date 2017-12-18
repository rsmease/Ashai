import React from 'react';
import { Link, Router } from 'react-router-dom';
import HorizontalLogoNamed from '../headers/horizontal_logo_named';
import SessionFooter from './session_footer';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.validSignup = false;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  componentWillMount() {
    document.title = "Ashai - Sign Up";
    this.props.removeAllErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state);
  }

  handleKeyUp(e) {
    if (this.state.email.length > 0) {
      this.validSignup = true;
    }
  }

  renderErrors() {
    if (this.props.errors.session.length > 0) {
      return (
        <div className="session-errors-list">
          {this.props.errors.session.map((error, i) => (
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
      <div className="session-container">
        <HorizontalLogoNamed />
        <div className="session-form-container">
          <h2 className="session-form-header">Sign Up</h2>
          <br></br>
          <div className="errors-fixed-container-signup">
            {this.renderErrors()}
          </div>
          <form className="session-form">
            <label>NAME
            <input
                onKeyUp={(e) => this.handleKeyUp(e)}
                type="text"
                value={this.state.name}
                onChange={this.handleInput('name')}
              />
            </label>
            <br></br>
            <label>EMAIL
            <input
                onKeyUp={(e) => this.handleKeyUp(e)}
                type="text"
                value={this.state.email}
                onChange={this.handleInput('email')}
              />
            </label>
            <br></br>
            <label>PASSWORD
            <input
                onKeyUp={(e) => this.handleKeyUp(e)}
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
              />
            </label>
            <br></br>
            <div className="submit-options">
              <button className="session-form-submit session-demo">
                <Link to="/demo">Demo Login</Link></button>
              <button className={
                this.validSignup === true ? "session-form-submit session-form-submit-valid" :
                  "session-form-submit"}
                onClick={this.handleSubmit}>Sign Up</button>
            </div>
          </form>
        </div>
        <SessionFooter />
      </div>
    );
  }
}

export default Signup;
