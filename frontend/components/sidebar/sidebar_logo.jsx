import React from 'react';
import { withRouter } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';

class SidebarLogo extends React.Component {
  constructor(props) {
    super(props);
  }

  hideSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.add("sidebar-hidden");
  }

  render() {
    return (
      <div className="sidebar-logo-container"
        onClick={() => this.props.history.push("/app")}>
        <div className="sidebar-logo-with-title">
          <img className="sidebar-logo"
            src="https://i.imgur.com/WcrVoLW.png" />
          <h1>Ashai</h1>
        </div>
        <MaterialDesign.MdClose className="close-sidebar-button"
          onClick={() => this.hideSidebar()} />
      </div>
    );
  }
}

export default withRouter(SidebarLogo);
