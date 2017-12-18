import React from 'react';
import { Link, Router } from 'react-router-dom';
import HorizontalLogoNamed from '../headers/horizontal_logo_named';
import SessionFooter from './session_footer';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.validLogin = false;
    this.loginSpeed = 100;
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillMount() {
    document.title = "Ashai - Demo";
  }

  componentDidMount() {
    this.demoLogin();
  }

  autoLogin(field, demoName, cb) {
    let typedText = "";
    const _type = () => {
      typedText = demoName.substring(0, typedText.length + 1);
      this.setState({ [field]: typedText });
      if (typedText === demoName) {
        setTimeout(() => cb(), this.loginSpeed);
      } else {
        if (this.state.email.length > 0) {
          this.validLogin = true;
        }
        setTimeout(() => _type(), this.loginSpeed);
      }
    };
    _type();
  }

  demoLogin(e) {
    this.autoLogin("email", "jsnow@thewall.got", (
      () => this.autoLogin("password", "jonsnowcorgicorgi", (
        () => this.handleAutoLogin()
      ))
    ));
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleAutoLogin() {
    this.props.login(this.state);
  }

  handleKeyUp(e) {
    if (this.state.email.length > 0) {
      this.validLogin = true;
    }
  }

  render() {
    return (
      <div className="session-container">
        <HorizontalLogoNamed />
        <div className="session-form-container">
          <h2 className="session-form-header">Demo</h2>
          <br></br>
          <div className="demo-div">
            <Link className="session-form-submit session-demo demo-active disabled-a"
              to="/demo">Loading Demo</Link>
          </div>
          <br></br>
          <form className="session-form">

            <label>EMAIL ADDRESS</label>
            <br></br>

            <input
              onKeyUp={(e) => this.handleKeyUp(e)}
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
            <br></br>

            <label>PASSWORD</label>
            <br></br>
            <input
              onKeyUp={(e) => this.handleKeyUp(e)}
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
            <br></br>
            <div className="submit-options">
              <button className={
                this.validLogin === true ? "session-form-submit disable-a session-form-submit-valid disabled-a" :
                  "session-form-submit"}>Log In</button>
            </div>
          </form>
        </div>
        <SessionFooter />
      </div>
    );
  }
}

export default Demo;
