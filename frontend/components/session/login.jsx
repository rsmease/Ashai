import React from 'react';
import { Link, Router } from 'react-router-dom';
import HorizontalLogoNamed from '../headers/horizontal_logo_named';
import { LoginFooter } from '../footers/footer';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.validLogin = false;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount () {
    document.title = "Ashai - Log In";
    this.props.removeAllErrors();
  }

  componentWillUnmount () {
    this.props.requestAllUsers();
    this.props.requestAllTeams();
  }

  renderErrors() {
    if (this.props.errors.session.length > 0) {
      return(
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


  autoLogin(field, demoName, cb) {
    let typedText = "";
    const _type = () => {
      typedText = demoName.substring(0, typedText.length + 1);
      this.setState({[field]:typedText});
      if (typedText === demoName) {
        setTimeout(() => cb(), this.loginSpeed);
      } else {
        if (this.state.password.length >= 6) {
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
        () => this.handleSubmit(e)
      ))
    ));
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/app'));
  }

  handleKeyUp(e) {
    if (this.state.email.length > 0) {
      this.validLogin = true;
    }
  }

  render() {
    return (
      <div className="root-container">
        <HorizontalLogoNamed />
        <div className="session-form-container">
          <h2 className="session-form-header">Log In</h2>
          <br></br>
          <div className="errors-fixed-container-login">
            {this.renderErrors()}
          </div>
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
              <button className="session-form-submit session-demo">
                <Link to="/demo">Demo Login</Link></button>
              <button className={
                  this.validLogin === true ? "session-form-submit session-form-submit-valid" :
                  "session-form-submit"}
                  onClick={this.handleSubmit}>Log In</button>
            </div>
            </form>
          </div>
          <LoginFooter />
      </div>
    );
  }
}

export default Login;








// <input
//   type="submit"
//   className = "session-form-submit session-demo"
//   value="View Demo"
//   onClick={this.demoLogin}
//   />
