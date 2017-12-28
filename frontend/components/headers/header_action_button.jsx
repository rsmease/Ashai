import React from 'react';
import * as MaterialDesign from 'react-icons/lib/md';
import onClickOutside from 'react-onclickoutside';
import { Router, Link, WithRouter } from 'react-router-dom';

import HeaderActionIndexContainer from './header_action_index_container';

class HeaderActionButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
        };
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown() {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    }

    toggleDropdownClass() {
        switch (this.props.source) {
            case "global-header-left":
                return this.state.dropdownOpen ? "action-index-container-visible" : "action-index-container-hidden";
            case "global-header-right":
                return this.state.dropdownOpen ? "global-header-right-action-index-container-visible" : "global-header-right-action-index-container-hidden";
            default:
                break;
        }
    }

    handleClickOutside() {
        if (this.state.dropdownOpen) {
            this.toggleDropdown();
        }
    }

    showAffordanceIcon() {
        if (this.props.source === "global-header-left") {
            return <MaterialDesign.MdAdd
                className="global-header-left-action-button"
                onClick={this.toggleDropdown} />;
        } else if (this.props.source === "global-header-right") {
            return (
                <div className="global-header-right-action-button"
                    onClick={this.toggleDropdown}>
                    <a className="header-link"> {this.props.currentUser.name} </a>
                    <img
                        src={this.props.currentUser.profile_image_url}
                        className="global-header-profile-image"></img>
                </div>
            );
        }
    }

    render() {
        return (<div className="header-action-button-container">
            {this.showAffordanceIcon()}
            <div className={this.toggleDropdownClass()}>
                <HeaderActionIndexContainer
                    toggleDropdown={this.toggleDropdown}
                    source={this.props.source} />
            </div>
        </div>);
    }
}

export default onClickOutside(HeaderActionButton);