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

    // showMembers() {
    //     if (this.props.groupType === "team") {

    //     }
    // }

    render() {
        return (
            <div className="sidebar-link-list">
                {
                    this.props.groups.map((group) => (
                        <SidebarGroupIndexItem
                            key={Math.random()}
                            group={group}
                            groupType={this.props.groupType} />
                    ))
                }
            </div>
        );
    }
}

export default withRouter(SidebarGroupIndex);