import React from 'react';
import { Link, Router } from 'react-router-dom';
import SidebarLogo from './mini_logo';
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
                <div className="sidebar-indices-container">
                    <SidebarIndexContainer group="team" />
                    <SidebarIndexContainer group="project" />
                </div>
            </div>
        );
    }

}

export default Sidebar;