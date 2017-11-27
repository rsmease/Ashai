import React from 'react';
import { Link, Router, Redirect, withRouter } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';

class UserHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUser(this.props.userId);
    console.log(this.props)
  }

  componentWillReceiveProps(newProps) {
    if (this.props.userId !== newProps.userId) {
      this.props.requestUser(newProps.userId);
    }
  }

  render() {
    return (
      <div className="home-header task-header-secondary">
        ELEPHANT
      </div>
    );
  }
}

export default withRouter(UserHeader);
