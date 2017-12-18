import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';


class SessionFooter extends React.Component {
  constructor(props) {
    super(props)
  }

  getAlternateOption() {
    if (this.props.match.path === "/login") {
      return (
        <div className="splash-links">
          <p>New User?</p>
          <Link to="/signup" className="session-link">Sign Up</Link>
        </div >
      );
    } else if (this.props.match.path === "/signup") {
      return (
        <div className="splash-links">
          <p>Already Have an Account?</p>
          <Link to="/login" className="session-link">Log In</Link>
        </div >
      );
    }
  }

  render() {
    return (
      <div className="footer">
        {this.getAlternateOption()}
        <ul>
          <li><a href="https://github.com/rsmease"
            target="_blank">
            Github</a></li>
          <li>-</li>
          <li><a href="https://www.linkedin.com/in/ryan-mease-140b473a/"
            target="_blank">
            LinkedIn</a></li>
        </ul>
      </div>
    );
  }


}

export default withRouter(SessionFooter);
