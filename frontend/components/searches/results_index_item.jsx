//utils
import React from 'react';
import { Link } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import * as MaterialDesign from 'react-icons/lib/md';

class SearchIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    showLeftIcon() {
        switch (this.props.resultType) {
            case "user":
                return (<img
                    className="results-index-image"
                    src={this.props.currentTarget.profile_image_url}></img>);
            case "project":
                return (<MaterialDesign.MdAssignmentTurnedIn
                    className="results-index-subheader-icon" />);
            case "team":
                return (<MaterialDesign.MdGroup
                    className="results-index-subheader-icon" />);
            default:
                break;
        }
    }

    toggleCustomResultInfo() {
        switch (this.props.resultType) {
            case "user":
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
        return (<div className="results-index-right-container">
            <Highlighter
                className="results-index-name"
                highlightClassName="results-index-bold results-index-underline"
                searchWords={[this.props.searchVal]}
                autoEscape={true}
                textToHighlight={this.props.currentTarget.name} />
            <Highlighter
                className="results-index-context"
                highlightClassName="results-index-bold"
                searchWords={[this.props.searchVal]}
                autoEscape={true}
                textToHighlight={this.toggleCustomResultInfo()} />
        </div>);
    }

    render() {
        return (<li className="results-index-item-container">
            <Link className="search-result-clickable"
                to={`/${this.props.resultType}s/${this.props.currentTarget.id}`}
                onClick={this.props.clearState}>
                {this.showLeftIcon()}
                {this.showResultInfo()}
            </Link>
        </li>);
    }
}

export default SearchIndexItem;