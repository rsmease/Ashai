import React from 'react';
import UserOptionsIndexItem from './user_options_index_item';
import OnClickOutside from 'react-onclickoutside';

class UserOptionsIndex extends React.Component  {
  constructor(props) {
    super(props);
  }

  handleClickOutside() {
    this.props.closeUserOptions();
  }

  render() {
    return(<div className="nav-user-options">
    <UserOptionsIndexItem
      action={this.props.logout}
      actionName="My Profile Settings..."/>
      <UserOptionsIndexItem
        action={this.props.logout}
        actionName="Logout"/>
    </div>);
  }
}

export default OnClickOutside(UserOptionsIndex);
