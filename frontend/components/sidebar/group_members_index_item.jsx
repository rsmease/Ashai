import React from 'react';
import { Link, Router } from 'react-router-dom';

class GroupMembersIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link to={`/users/${this.props.member.id}`}>
                <img className="sidebar-profile-image"
                    src={this.props.member.profile_image_url} />
            </Link>
        );
    }
}

export default GroupMembersIndexItem;