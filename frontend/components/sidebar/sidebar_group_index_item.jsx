import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';

class SidebarGroupIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    showMembers() {
        if (this.props.groupType === "team") {
            console.log(`Now showing members for team ${this.props.group.name}`)
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
            </div>
        );
    }
}

export default withRouter(SidebarGroupIndexItem);