import React from 'react';
import { Router, Link, WithRouter } from 'react-router-dom';

class UserOptionsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  determineClassName() {
    if (this.props.actionName === "Delete Team" ||
        this.props.actionName === "Delete Project") {
          return "nav-user-options-item-container header-options-delete";
        } else {
          return "nav-user-options-item-container";
        }
  }


  render() {
    return(<div className={this.determineClassName()}
      onClick={this.props.action}>
      <p className="nav-user-option-name">{this.props.actionName}</p>
    </div>);
  }
}

export default UserOptionsIndexItem;
