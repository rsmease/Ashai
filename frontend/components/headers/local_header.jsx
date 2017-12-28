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
            console.log("pinging server");
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

    render() {
        return (
            <div className="local-header">
                {this.showIcon()}
                <h1 className="local-header-title">
                    {this.showTitle()}</h1>
                <HeaderActionButton
                    source="local-header"
                    currentUser={this.props.currentUser} />
            </div>
        );
    }
}

export default withRouter(LocalHeader);