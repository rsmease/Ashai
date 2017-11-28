import React from 'react';
import { Link, Router, Redirect, withRouter } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';

class TeamHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTeamHeader() {
    if (this.props.team) {
      return (<div className="home-header task-header-secondary team-header">
          <div className="home-header-content-container">
            <h1 className="secondary-header-title team-header-title">
              {this.props.team.name}</h1>
          </div>
      </div>);
    } else {
      return(
        <div className="home-header task-header-secondary"></div>
      );
    }
  }

  componentDidMount() {
    this.props.requestTeam(this.props.teamId);
    console.log(this.props);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.teamId !== newProps.teamId) {
      this.props.requestTeam(newProps.teamId);
    }
  }

  render() {
    return (
      <div>
        {this.renderTeamHeader()}
      </div>
    );
  }
}

export default withRouter(TeamHeader);
