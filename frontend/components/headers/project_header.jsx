import React from 'react';
import { Link, Router, Redirect, withRouter } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';

class ProjectHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  renderProjectHeader() {
    if (this.props.project) {
      return (<div className="home-header task-header-secondary project-header">
        <div className="home-header-content-container">
          <h1 className="secondary-header-title project-header-title">
            {this.props.project.name}</h1>
        </div>
      </div>);
    } else {
      return(
        <div className="home-header task-header-secondary"></div>
      );
    }
  }

  componentDidMount() {
    this.props.requestProject(this.props.projectId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.projectId !== newProps.projectId) {
      this.props.requestProject(newProps.projectId);
    }
  }

  render() {
    return (
      <div>
        {this.renderProjectHeader()}
      </div>
    );
  }
}

export default withRouter(ProjectHeader);
