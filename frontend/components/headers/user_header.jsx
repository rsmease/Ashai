import React from 'react';
import { Link, Router, Redirect, withRouter } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';

class UserHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  renderUserHeader() {
    if (this.props.user) {
      return (<div className="home-header task-header-secondary">
        <div className="home-header-content-container">
          <img className="secondary-header-profile"
            key={Math.random()}
            src={this.props.user.profile_image_url}/>
          <h1 className="secondary-header-title">
            {this.props.user.name}{"'"}s Tasks</h1>
        </div>
      </div>);
    } else {
      return(
        <div className="home-header task-header-secondary"></div>
      );
    }
  }

  componentDidMount() {
    this.props.requestUser(this.props.userId);
    console.log(this.props);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.userId !== newProps.userId) {
      this.props.requestUser(newProps.userId);
    }
  }

  render() {
    return (
      <div>
        {this.renderUserHeader()}
      </div>
    );
  }
}

export default withRouter(UserHeader);
