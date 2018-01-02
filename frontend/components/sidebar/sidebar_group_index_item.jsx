//utils
import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';

//components
import SidebarGroupMembersIndex from './sidebar_group_members_index';
import SidebarOwnerToolsContainer from './sidebar_owner_tools_container';

class SidebarGroupIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    showMembers() {
        if (this.props.groupType === "team") {
            return <SidebarGroupMembersIndex
                group={this.props.group}
                groupType={this.props.groupType}
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

    toggleToolsDisplay() {
        return this.props.userIsOwner ? "sidebar-group-links-owner" : "sidebar-group-links";
    }

    render() {
        return (
            <div className="sidebar-group-index-item">
                {this.showMembers()}
                <div className={this.toggleToolsDisplay()}>
                    <Link
                        className="sidebar-group-link"
                        to={`/${this.props.groupType}s/${this.props.group.id}`}>
                        {this.props.group.name}
                    </Link>
                    {this.showOwnerTools()}
                </div>
            </div>
        );
    }
}

export default withRouter(SidebarGroupIndexItem);