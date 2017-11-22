import React from 'react';
import { Link, Router } from 'react-router-dom';
import HorizontalLogoNamed from '../headers/horizontal_logo_named';
import { SignupFooter } from '../footers/footer';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.keyUp = false;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  componentWillMount () {
    document.title = "Ashai - Sign Up";
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/app'));
  }

  handleKeyUp(e) {
    this.keyUp = true;
    console.log("Key Up Event Working");
  }


  render() {
    return (
      <div className="root-container">
      <HorizontalLogoNamed />
      <div className="session-form-container">
        <h2 className="session-form-header">Sign Up</h2>
        <br></br>
        <div className="demo-div">
          <input
            type="submit"
            className = "session-form-submit session-demo"
            value="View Demo"
            />
        </div>
        <br></br>
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

          <button className={
              this.keyUp === true ? "session-form-submit session-form-submit-valid" :
              "session-form-submit"}
              onClick={this.handleSubmit}>Sign Up</button>
          </form>
          <Link to="/login" className="login-link session-link">Log In</Link>
        </div>
        <SignupFooter/>
      </div>
    );
  }
}

export default Signup;
