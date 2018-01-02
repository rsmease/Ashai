//utils
import React from 'react';
import { Link } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import * as MaterialDesign from 'react-icons/lib/md';

class ResultsIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleAddMember() {
        if (this.props.groupType === "team") {
            this.props.createNewMembership(
                { member_id: this.props.user.id, team_id: this.props.group.id }
            );
        } else {
            this.props.createNewMembership(
                { member_id: this.props.user.id, project_id: this.props.group.id }
            );
        }
    }

    showLeftIcon() {
        switch (this.props.resultType) {
            case "user":
                return (<img
                    className="results-index-item-profile-image"
                    src={this.props.currentTarget.profile_image_url}></img>);
            case "non-member":
                return (<img
                    className="results-index-item-profile-image"
                    src={this.props.currentTarget.profile_image_url}></img>);
            case "project":
                return (<MaterialDesign.MdAssignmentTurnedIn
                    className="results-index-item-icon" />);
            case "team":
                return (<MaterialDesign.MdGroup
                    className="results-index-item-icon" />);
            default:
                break;
        }
    }

    toggleCustomResultInfo() {
        switch (this.props.resultType) {
            case "user":
                return this.props.currentTarget.email;
            case "non-member":
                return this.props.currentTarget.email;
            case "project":
                return this.props.currentTarget.description;
            case "team":
                return this.props.currentTarget.description;
            default:
                break;
        }
    }

    showResultInfo() {
        return (<div className="results-index-item-grouping">
            <Highlighter
                className="results-index-item-name"
                highlightClassName="results-index-item-bold results-index-item-underline"
                searchWords={[this.props.searchVal]}
                autoEscape={true}
                textToHighlight={this.props.currentTarget.name} />
            <Highlighter
                className="results-index-item-context"
                highlightClassName="results-index-item-bold"
                searchWords={[this.props.searchVal]}
                autoEscape={true}
                textToHighlight={this.toggleCustomResultInfo()} />
        </div>);
    }

    showRightIcon() {
        switch (this.props.resultType) {
            case "non-member":
                return (<MaterialDesign.MdPersonAdd
                    className="member-add-button"
                    onClick={this.handleAddMember} />);
            default:
                break;
        }
    }

    showContent() {
        if (this.props.resultType !== "non-member") {
            return (<Link className="results-index-item-clickable"
                to={`/${this.props.resultType}s/${this.props.currentTarget.id}`}
                onClick={this.props.clearState}>
                {this.showLeftIcon()}
                {this.showResultInfo()}
                {this.showRightIcon()}
            </Link>);
        } else {
            return (<div className="results-index-item-unclickable">
                <div className="add-member-results-index-item-grouping">
                    {this.showLeftIcon()}
                    {this.showResultInfo()}
                </div>
                {this.showRightIcon()}
            </div>);
        }
    }

    render() {
        return (<li className={`${this.props.source}-results-index-item-container`}>
            {this.showContent()}
        </li>);
    }
}

export default ResultsIndexItem;