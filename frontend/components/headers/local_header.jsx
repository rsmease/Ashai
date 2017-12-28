import React from 'react';
import { Link, Router, Redirect } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';

class LocalHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="local-header">
                <img className="secondary-header-profile"
                    key={Math.random()}
                    src={this.props.currentUser.profile_image_url} />
                <h1 className="secondary-header-title">
                    {this.props.currentUser.name}{"'"}s Tasks</h1>
            </div>
        );
    }
}

export default LocalHeader;