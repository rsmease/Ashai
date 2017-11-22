import React from 'react';
import { Link, Router } from 'react-router-dom';

export const LoginFooter = () => (
  <div className="footer">
    <div className="placeholder-links">
      <h3>New User?</h3>
      <Link to="/signup" className="signup-link session-link">Sign Up</Link>
    </div>
    <ul>
      <li><a href="https://github.com/rsmease">
        Github</a></li>
      <li><a href="https://www.linkedin.com/in/ryan-mease-140b473a/">
        LinkedIn</a></li>
    </ul>
  </div>
);

export const SignupFooter = () => (
  <div className="footer">
    <div className="placeholder-links">
      <h3>Already Have an Account?</h3>
      <Link to="/login" className="login-link session-link">Log In</Link>
    </div>
    <ul>
      <li>
        <a href="https://github.com/rsmease">
        Github</a></li>
      <li>
        <a href="https://www.linkedin.com/in/ryan-mease-140b473a/">
        LinkedIn</a></li>
    </ul>
  </div>
);
