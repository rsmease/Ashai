//utils
import React from 'react';
import { Link, Router, Redirect } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';

import HeaderActionButton from './header_action_button';
import SearchBarContainer from '../searches/search_bar_container';

class GlobalHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    revealSidebar() {
        // const sidebar = document.getElementById("sidebar");
        // const revealSidebar = document.getElementById("reveal-sidebar");
        // sidebar.classList.remove("sidebar-hidden");
        // revealSidebar.classList.add("reveal-sidebar-hidden");
        this.props.requestToOpenSidebar();
    }

    toggleRevealSidebarButton() {
        console.log("running button")
        return this.props.revealSidebar ? "reveal-sidebar-hidden" : "reveal-sidebar";
    }

    render() {
        return (
            <div className="global-header">
                <div className="global-header-left-section">
                    <MaterialDesign.MdMenu className={this.toggleRevealSidebarButton()}
                        onClick={() => this.revealSidebar()} />
                    <Link to="/app" className="header-link">My Tasks</Link>
                    <HeaderActionButton
                        source="global-header-left" />
                </div>
                <SearchBarContainer
                    source="global-header" />
                <div className="global-header-right-section">
                    <a href="https://www.stackoverflow.com"
                        className="header-link" target="_blank">Help</a>
                    <a href="https://www.linkedin.com/in/ryan-mease-140b473a/"
                        className="upgrade-button"
                        target="_blank">
                        Upgrade</a>
                    <HeaderActionButton
                        source="global-header-right"
                        currentUser={this.props.currentUser} />
                </div>
            </div>
        );
    }
}

export default GlobalHeader;