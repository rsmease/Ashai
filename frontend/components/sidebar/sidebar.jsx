import React from 'react';
import { Link, Router } from 'react-router-dom';
import SidebarLogo from './sidebar_logo';
import SidebarIndexContainer from './sidebar_index_container';
import Modal from 'react-modal';


class Sidebar extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        document.title = "Ashai - Home";
    }

    toggleSidebarVisible() {
        return this.props.sidebarVisible ? "sidebar" : "sidebar-hidden";
    }

    render() {
        return (
            <div className={`${this.toggleSidebarVisible()}`} id="sidebar">
                <SidebarLogo
                    requestToOpenSidebar={this.props.requestToOpenSidebar}
                    requestToCloseSidebar={this.props.requestToCloseSidebar} />
                <div className="sidebar-sections-container">
                    <SidebarIndexContainer groupType="team" />
                    <SidebarIndexContainer groupType="project" />
                </div>
            </div>
        );
    }

}

export default Sidebar;