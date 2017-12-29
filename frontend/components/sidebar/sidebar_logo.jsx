import React from 'react';
import { withRouter } from 'react-router-dom';

class SidebarLogo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar-logo-container"
        onClick={() => this.props.history.push("/app")}>
        <img className="sidebar-logo"
          src="https://i.imgur.com/WcrVoLW.png" />
        <h1>Ashai</h1>
      </div>
    );
  }
}

export default withRouter(SidebarLogo);
