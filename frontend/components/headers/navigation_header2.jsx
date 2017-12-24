import React from 'react';
import { Link, Router, Redirect } from 'react-router-dom';
import NavBarSearchContainer from '../searches/nav_bar_search_container';
import HeaderAddDropdownContainer from './header_add_dropdown_container';
import UserOptionsIndex from './user_options_index';
import Modal from 'react-modal';

class NavigationHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleClicked: false,
        };
        this.openUserOptions = this.openUserOptions.bind(this);
        this.closeUserOptions = this.closeUserOptions.bind(this);

        this.renderAddButtion = this.renderAddButtion.bind(this);
    }

    openAddDropdown() {
        this.setState({ addDropdownModalOpen: true });
    }
    closeAddDropdown() {
        this.setState({ addDropdownModalOpen: false });
    }

    openUserOptions(e) {
        if (this.state.toggleClicked === false &&
            e.target.className === "user-options-panel-hover" ||
            e.target.className === "header-link name-link" ||
            e.target.className === "nav-header-profile") {
            this.setState({ toggleClicked: true });
        }
    }

    closeUserOptions() {
        this.setState({ toggleClicked: false });
    }

    renderAddButtion() {
        return (<div className="add-task-header-container">
            <button className="add-task-header-button"
                onClick={this.openAddDropdown}>+</button>
            <Modal
                isOpen={this.state.addDropdownModalOpen}
                onRequestClose={this.closeAddDropdown}
                overlayClassName={
                    {
                        base: "root-modal-container-invisible",
                        afterOpen: "root-modal-container-invisible",
                        beforeClose: "root-modal-container-invisible"
                    }
                }
                className={
                    {
                        base: "override-content-default",
                        afterOpen: "override-content-default",
                        beforeClose: "override-content-default"
                    }
                }>
                <HeaderAddDropdownContainer
                    closeAddDropdown={this.closeAddDropdown}
                    currentUser={this.props.currentUser} />
            </Modal>
        </div>);
    }

    render() {
        const userOptionsViewState =
            this.state.toggleClicked === true ? "nav-user-options-container-visible" :
                "nav-user-options-container";
        return (
            <div className="task-header-primary">
                <div className="left-links">
                    <Link to="/app" className="header-link">My Tasks</Link>
                    {this.renderAddButtion()}
                </div>
                <NavBarSearchContainer />
                <div className="right-links">
                    <a href="https://www.stackoverflow.com"
                        className="header-link" target="_blank">Help</a>
                    <a href="https://www.linkedin.com/in/ryan-mease-140b473a/"
                        className="upgrade-button"
                        target="_blank">
                        Upgrade</a>
                    <div className="toggle-user-options-panel"
                        onClick={this.openUserOptions}>
                        <div className="user-options-panel-hover">
                            <a className="header-link
                                name-link"> {this.props.currentUser.name} </a>
                            <img
                                src={this.props.currentUser.profile_image_url}
                                className="nav-header-profile"></img>
                        </div>
                        <div className={userOptionsViewState}>
                            <UserOptionsIndex
                                logout={this.props.logout}
                                closeUserOptions={this.closeUserOptions} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavigationHeader;