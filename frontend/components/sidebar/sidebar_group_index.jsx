import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';
import SidebarGroupIndexItem from './sidebar_group_index_item';
import * as MaterialDesign from 'react-icons/lib/md';

class SidebarGroupIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    userIsOwner(group) {
        if (this.props.groupType === "project") {
            return this.props.currentUser.id === group.project_owner_id;
        } else if (this.props.groupType === "team") {
            return this.props.currentUser.id === group.team_owner_id;
        }
    }

    render() {
        return (
            <div className="sidebar-link-list">
                {
                    this.props.groups.map((group) => (
                        <SidebarGroupIndexItem
                            key={Math.random()}
                            userIsOwner={this.userIsOwner(group)}
                            group={group}
                            groupType={this.props.groupType} />
                    ))
                }
            </div>
        );
    }
}

export default withRouter(SidebarGroupIndex);