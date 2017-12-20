import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';

import SidebarMemberIndex from './sidebar_member_index';

class SidebarIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        };

    }

    // handleDelete(e) {
    //     if (this.props.group === "team") {
    //         this.props.requestToDeleteTeam(this.props.team.id)
    //             .then(this.closeDeleteModal())
    //             .then(this.returnToHome(this.props.team.id));
    //     } else if (this.props.group === "project") {

    //     }
    // }

    render() {
        return (
            <section className="sidebar-section">
                <header className="sidebar-index-header">
                    <h3 className="sidebar-title">{`My ${this.props.group}s`}</h3>
                    <a className="sidebar-new-project-button"
                        onClick={() => console.log("RESPONSIVE BUTTON")}>
                        MaterialDesign.MdAddCircleOutline</a>
                </header>
            </section>
        );
    }
}

export default withRouter(SidebarIndex);
