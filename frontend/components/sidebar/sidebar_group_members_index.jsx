import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';
import TeamSidebarProfiles from './team_sidebar_profiles';
import * as MaterialDesign from 'react-icons/lib/md';

class SidebarGroupMembersIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        return (
            <div className="sidebar-link-list">
                <TeamSidebarProfiles
                    team={this.props.team}
                    members={this.props.team.members} />
                <div className="sidebar-link-list-item">
                    <Link
                        className="sidebar-link-project"
                        to={`/teams/${this.props.team.id}`}>
                        {this.props.team.name}
                    </Link>
                </div>
            </div>
        );
    }
}

export default withRouter(SidebarGroupMembersIndex);