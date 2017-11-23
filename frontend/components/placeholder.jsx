import React from 'react';
import { Router, Link } from 'react-router-dom';

class PlaceHolder extends React.Component {

  constructor() {
    super();
  }

  componentWillMount () {
    document.title = "Ashai";
  }

  render () {
    return (
      <div className="root-container">
        <div className="placeholder-div">
          <img className="placeholder-img"
            src={"https://i.imgur.com/WcrVoLW.png"} />
          <br></br>
          <h1 className="placeholder-title">Ashai</h1>
          <div className="placeholder-links-upper">
            <Link to="/login" className="login-link session-link">Log In</Link>
            <Link to="/signup"
               className="signup-link session-link">Sign Up</Link>
          </div>
          <div className="placeholder-links-lower">
            <Link className="session-form-submit session-demo"
              to="/demo">View Demo</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaceHolder;
