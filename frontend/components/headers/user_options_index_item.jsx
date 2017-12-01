import React from 'react';
import { Router, Link, WithRouter } from 'react-router-dom';

class UserOptionsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(<div className="nav-user-options-item-container"
      onClick={this.props.action}>
      <p className="nav-user-option-name">{this.props.actionName}</p>
    </div>);
  }
}

export default UserOptionsIndexItem;
