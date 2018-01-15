//utils
import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';

class UserDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user-detail">
                <div className="user-upper-detail">
                    <h4 className="user-detail-title">{this.props.currentTarget.name}</h4>
                    <img className="user-detail-profile-image"
                        src={this.props.currentTarget.profile_image_url} />
                </div>
                <div className="user-description">
                    <h4 className="user-detail-title">About Me</h4>
                    <p>{this.props.currentTarget.bio}</p>
                </div>
            </div>
        );
    }
}

export default withRouter(UserDetail);
