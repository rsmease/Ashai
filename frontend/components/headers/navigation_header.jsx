import React from 'react';
import { Link, Router, Redirect } from 'react-router-dom';
import NavBarSearchContainer from '../searches/nav_bar_search_container';

class NavigationHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="task-header-primary">
        <div className="left-links">
          <Link to="/app" className="header-link">My Tasks</Link>
          <div className="add-task-header-container">
            <button className="add-task-header-button">+</button></div>
        </div>
        <NavBarSearchContainer />
        <div className="right-links">
          <a href="https://www.stackoverflow.com"
            className="header-link" target="_blank">Help</a>
          <a href="https://www.linkedin.com/in/ryan-mease-140b473a/"
            className="upgrade-button"
            target="_blank">
            Upgrade</a>
          <a
            className="header-link"
            onClick={this.props.logout}>
            Log Out
          </a>
        </div>
      </div>
    );
  }
}

export default NavigationHeader;
