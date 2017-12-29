import React from 'react';
import { withRouter } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';
import HeaderActionButton from './header_action_button';

class LocalHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTarget: this.props.entities[this.props.entityId]
        };
    }

    //trigger home header render;
    //header must have currentUser, so it will not receive new props when routing to '/app'
    componentWillMount() {
        if (this.props.match.url === '/app') {
            this.setState({ currentTarget: this.props.currentUser });
        }
    }

    //load local entity unless it exists in current state
    componentWillReceiveProps(nextProps) {
        if (nextProps.entities[nextProps.entityId] === undefined) {
            switch (nextProps.entityType) {
                case "team":
                    this.props.requestTeam(nextProps.entityId);
                    break;
                case "project":
                    this.props.requestProject(nextProps.entityId);
                    break;
                default:
                    this.props.requestUser(nextProps.entityId);
                    break;
            }
        }
        this.setState({ currentTarget: nextProps.entities[nextProps.entityId] });
    }

    currentUserIsOwner() {
        if (this.state.currentTarget) {
            switch (this.props.entityType) {
                case "team":
                    return this.state.currentTarget.team_owner_id === this.props.currentUser.id;
                case "project":
                    return this.state.currentTarget.project_owner_id === this.props.currentUser.id;
                default:
                    return false;
            }
        }
    }

    showIcon() {
        if (this.props.entityType === "user" && this.state.currentTarget) {
            return <img className="local-header-profile-image"
                src={this.state.currentTarget.profile_image_url} />;
        }
    }
    showName() {
        return this.state.currentTarget ? this.state.currentTarget.name : "";
    }

    showTitle() {
        if (this.state.currentTarget) {
            return this.props.entityType === "user" ? this.showName() + "'s Tasks" : this.showName();
        }
    }

    showActionButton() {
        if (this.props.entityType !== "user" && this.state.currentTarget) {
            return <HeaderActionButton
                source="local-header"
                currentUser={this.props.currentUser}
                currentUserIsOwner={this.currentUserIsOwner()}
                entityType={this.props.entityType}
                targetGroup={this.state.currentTarget}
            />;
        }
    }

    render() {
        return (
            <div className="local-header">
                {this.showIcon()}
                <div className="local-header-title-container">
                    <h1 className="local-header-title">
                        {this.showTitle()}</h1>
                </div>
                {this.showActionButton()}
            </div>
        );
    }
}

export default withRouter(LocalHeader);