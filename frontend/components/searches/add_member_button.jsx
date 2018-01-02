import React from 'react';
import * as MaterialDesign from 'react-icons/lib/md';
import onClickOutside from 'react-onclickoutside';
import { Router, Link, WithRouter } from 'react-router-dom';

import SearchBarContainer from '../searches/search_bar_container';

class AddMemberButton extends React.Component {
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
        return this.state.dropdownOpen ? "add-member-container-visible" : "add-member-container-hidden";
    }

    handleClickOutside() {
        if (this.state.dropdownOpen) {
            this.toggleDropdown();
        }
    }

    toggleAffordanceIconPosition() {
        return this.state.dropdownOpen ? "-active" : "";
    }

    showAffordanceIcon() {
        switch (this.props.source) {
            case "sidebar-group-members-index":
                return (<MaterialDesign.MdPersonAdd
                    title="Add a New Member"
                    className="sidebar-new-member-button"
                    onClick={this.toggleDropdown} />);
            default:
                break;
        }
    }

    render() {
        return (<div className="add-member-button-container">
            {this.showAffordanceIcon()}
            <div className={this.toggleDropdownClass()}>
                <SearchBarContainer
                    source={this.props.source} />
            </div>
        </div>);
    }
}

export default onClickOutside(AddMemberButton);