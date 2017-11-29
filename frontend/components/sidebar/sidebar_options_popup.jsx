import React from 'react';
import { Link, Router } from 'react-router-dom';

class SidebarOptionsPopup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar-options-container">
        <button className="sidebar-edit-button">Edit</button>
        <button className="sidebar-delete-button">Delete</button>
      </div>
    );
  }
}

export default SidebarOptionsPopup;
