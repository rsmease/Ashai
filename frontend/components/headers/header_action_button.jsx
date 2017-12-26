import React from 'react';
import * as MaterialDesign from 'react-icons/lib/md';
import { Router, Link, WithRouter } from 'react-router-dom';

import HeaderActionIndexContainer from './header_action_index_container';

class HeaderActionButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
        };

        this.openDropdown = this.openDropdown.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);
    }

    openDropdown() {
        this.setState({ dropdownOpen: true });
    }

    closeDropdown() {
        this.setState({ dropdownOpen: false });
    }

    showAffordanceIcon() {
        if (this.props.source === "global-header-left") {
            return <MaterialDesign.MdAdd
                className="global-left-action-button"
                onClick={this.openDropdown} />;
        } else if (this.props.source === "global-header-right") {
            return (
                <div className="user-options-container">
                    <a className="header-link"> {this.props.currentUser.name} </a>
                    <img
                        src={this.props.currentUser.profile_image_url}
                        className="global-header-profile-image"></img>
                </div>
            );
        }
    }

    render() {
        return (<div className="header-action-index-container">
            {this.showAffordanceIcon()}
            <HeaderActionIndexContainer
                closeDropdown={this.closeDropdown}
                source={this.props.source} />
        </div>);
    }
}

export default HeaderActionButton;