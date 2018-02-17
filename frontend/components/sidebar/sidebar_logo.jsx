import React from 'react';
import { withRouter } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';

class SidebarLogo extends React.Component {
  constructor(props) {
    super(props);
  }

  hideSidebar() {
    // const sidebar = document.getElementById("sidebar");
    // const revealSidebar = document.getElementById("reveal-sidebar");
    // sidebar.classList.add("sidebar-hidden");
    // revealSidebar.classList.remove("reveal-sidebar-hidden");
    this.props.requestToCloseSidebar();
  }

  returnToHome() {
    if (this.props.match.path !== "/app") {
      this.props.history.push("/app");
    }
  }

  render() {
    return (
      <div className="sidebar-logo-container">
        <div className="sidebar-logo-with-title"
          onClick={() => this.returnToHome()}>
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
