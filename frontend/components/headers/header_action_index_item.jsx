import React from 'react';
import { Router, Link, WithRouter } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';

class HeaderActionIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    renderIcon() {
        if (this.props.actionName === "New Project") {
            return <MaterialDesign.MdAssignmentTurnedIn
                className="add-item-icon" />;
        } else if (this.props.actionName === "New Task") {
            return <MaterialDesign.MdCheckCircle
                className="add-item-icon" />;
        }
    }

    render() {
        return (<div className="nav-add-item-container"
            onClick={this.props.action}>
            {this.renderIcon()}
            <p className="nav-add-title">{this.props.actionName}</p>
        </div>);
    }
}

export default HeaderActionIndexItem;