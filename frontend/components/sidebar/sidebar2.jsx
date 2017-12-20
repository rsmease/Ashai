import React from 'react';
import { Link, Router } from 'react-router-dom';
import SidebarLogo from './mini_logo';
import Modal from 'react-modal';
import NewProjectModalContainer from '../modals/new_project_modal_container';
import NewTeamModalContainer from '../modals/new_team_modal_container';

class Sidebar extends React.Compoent {
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
                <div className="fixed-sidebar-container">
                    <SidebarIndexContainer group="team" />
                    <SidebarIndexContainer group="project" />
                </div>
            </div>
        );
    }

}

export default Sidebar;