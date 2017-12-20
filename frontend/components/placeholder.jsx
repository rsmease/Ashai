import React from 'react';
import { Router, Link } from 'react-router-dom';

class PlaceHolder extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {
    document.title = "Ashai";
  }

  render() {
    return (
      <div className="splash-container">
        <div className="splash-div">
          <img src={"https://i.imgur.com/WcrVoLW.png"} />
          <h1>Ashai</h1>
          <div className="splash-links">
            <Link to="/login" className="login-link session-link">Log In</Link>
            <Link to="/signup"
              className="signup-link session-link">Sign Up</Link>
            <Link className="demo-form-link-splash"
              to="/demo">Demo Login</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaceHolder;
