//utils
import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';

//components
import GroupMembersIndex from './group_members_index';
import SidebarOwnerToolsContainer from './sidebar_owner_tools_container';

class SidebarGroupIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    showMembers() {
        if (this.props.groupType === "team") {
            return <GroupMembersIndex
                group={this.props.group}
            />;
        }
    }

    showOwnerTools() {
        if (this.props.userIsOwner) {
            return <SidebarOwnerToolsContainer
                group={this.props.group}
                groupType={this.props.groupType} />;
        }
    }

    render() {
        return (
            <div className="sidebar-link-list-item">
                {this.showMembers()}
                <Link
                    className="sidebar-link-project"
                    to={`/${this.props.groupType}s/${this.props.group.id}`}>
                    {this.props.group.name}
                </Link>
                {this.showOwnerTools()}
            </div>
        );
    }
}

export default withRouter(SidebarGroupIndexItem);