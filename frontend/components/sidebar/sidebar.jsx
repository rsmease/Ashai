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

    render() {
        return (
            <div className="sidebar">
                <SidebarLogo />
                <div className="sidebar-sections-container">
                    <SidebarIndexContainer groupType="team" />
                    <SidebarIndexContainer groupType="project" />
                </div>
            </div>
        );
    }

}

export default Sidebar;