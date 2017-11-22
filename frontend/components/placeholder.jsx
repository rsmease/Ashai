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
      <div>
        <div className="placeholder-div">
          <img className="placeholder-img"
            src={"https://i.imgur.com/WcrVoLW.png"} />
          <br></br>
          <h1>Ashai</h1>
          <div className="placeholder-links">
            <Link to="/login" className="login-link session-link">Log In</Link>
            <Link to="/signup" className="signup-link session-link">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaceHolder;
