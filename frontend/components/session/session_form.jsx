import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';
import SessionLogo from './session_logo';
import SessionFooter from './session_footer';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    };
    this.validLogin = false;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginSpeed = 100;
    this.demoLogin = this.demoLogin.bind(this);
    this.demoStart = false;
    this.removeAllErrors = this.props.removeAllErrors.bind(this);
    this.currentPath = undefined;
  }

  componentWillMount() {
    document.title = `Ashai${this.getTitle()}`;
    this.currentPath = this.props.history.location.pathname;
  }

  //autostart demo login after router change
  componentDidUpdate() {
    //track changes in history and remove errors
    //required to remove errors unique to each version of the session form
    //activated when a user switches between session forms
    if (this.props.history.location.pathname !== this.currentPath) {
      this.currentPath = this.props.history.location.pathname;
      document.title = `Ashai${this.getTitle()}`;
      this.removeAllErrors();
    }
    if (this.props.match.path === "/demo" && this.demoStart === false) {
      this.demoStart = true;
      this.demoLogin();
    }
  }

  //render document and form title
  getTitle() {
    switch (this.props.match.path) {
      case "/login":
        return " - Log In";
      case "/signup":
        return " - Sign Up";
      case "/demo":
        return " - Demo";
      default:
        return "";
    }
  }

  //show demo button except on demo page
  toggleDemoButton() {
    if (this.props.match.path !== "/demo") {
      return <Link
        className="demo-form-link"
        to="/demo">View Demo</Link>;
    }
  }

  //show name input only on signup page
  toggleNameInput() {
    if (this.props.match.path === "/signup") {
      return <div>
        <label>NAME</label>
        <input
          onKeyUp={(e) => this.handleKeyUp(e)}
          type="text"
          value={this.state.name}
          onChange={this.handleInput('name')}
        /></div >;
    }
  }

  //show loading message to user
  showDemoLoad() {
    if (this.props.match.path === "/demo") {
      return <Link
        className="demo-loading disabled-a"
        to="/demo">Loading Demo</Link>;
    }
  }

  //logic to initiate automated login
  demoLogin(e) {
    this.autoLogin("email", "jsnow@thewall.got", (
      () => this.autoLogin("password", "jonsnowcorgicorgi", (
        () => this.handleSubmit()
      ))
    ));
  }

  //logic to 'ghost type' demo user
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

  //render session errors to user


  filteredErrors(labelName) {
    return this.props.errors.session.filter((error) => (
      error.toLowerCase().includes(labelName)
    ));
  }

  showErrors(labelName, displayClass) {
    if (this.props.errors.session.length > 0) {
      return (
        this.filteredErrors(labelName).map((error, i) => (
          <span key={i} className={displayClass}>{error}</span>
        ))
      );
    }
  }

  //update form inputs in place
  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    //pseudo-event (e is undefined) with demo login
    if (e) {
      e.preventDefault();
    }

    if (this.props.match.path === "/signup") {
      this.props.createNewUser(this.state);
    } else {
      this.props.login(this.state);
    }
  }

  //activate submit button with valid inputs
  handleKeyUp(e) {
    if (this.state.email.length > 0) {
      this.validLogin = true;
    }
  }

  render() {
    return (
      <div className="session-container">
        <SessionLogo />
        <div className="session-form-container">
          <h2 className="session-form-header">{this.getTitle().slice(3)}</h2>

          {this.showDemoLoad()}

          <form className="session-form">
            {this.showErrors("invalid", "session-error-header")}
            {
              this.props.match.path === "/signup" ?
                <label>NAME </label> : undefined
            }
            {
              this.props.match.path === "/signup" ?
                this.showErrors("name can't", "session-error") : undefined
            }
            {
              this.props.match.path === "/signup" ?
                <input
                  onKeyUp={(e) => this.handleKeyUp(e)}
                  type="text"
                  value={this.state.name}
                  onChange={this.handleInput('name')}
                /> : undefined
            }

            <label>EMAIL ADDRESS</label>
            {this.showErrors("email can't", "session-error")}
            <input
              onKeyUp={(e) => this.handleKeyUp(e)}
              type="email"
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
            <label>PASSWORD</label>
            {this.showErrors("password is", "session-error")}
            <input
              onKeyUp={(e) => this.handleKeyUp(e)}
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
            <div className="submit-options">
              {this.toggleDemoButton()}
              <button className={
                this.validLogin === true ? "session-form-submit-valid" :
                  "session-form-submit"}
                onClick={this.handleSubmit}>{this.getTitle().slice(3)}</button>
            </div>
          </form>
        </div>
        <SessionFooter />
      </div>
    );
  }
}

export default withRouter(SessionForm);

