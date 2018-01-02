import React from 'react';
import { Router, Link, WithRouter } from 'react-router-dom';
import Highlighter from 'react-highlight-words';

class SearchIndexUserItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="results-index-item-container">
      <Link className="result-index-item-clickable"
        to={`/users/${this.props.user.id}`}
        onClick={this.props.clearState}>
        <img
          className="results-index-image"
          src={this.props.user.profile_image_url}></img>
        <div className="results-index-right-container">
          <Highlighter
            className="results-index-name"
            highlightClassName="results-index-bold results-index-underline"
            searchWords={[this.props.searchVal]}
            autoEscape={true}
            textToHighlight={this.props.user.name} />
          <Highlighter
            className="results-index-context"
            highlightClassName="results-index-bold"
            searchWords={[this.props.searchVal]}
            autoEscape={true}
            textToHighlight={this.props.user.email} />
        </div>
      </Link>
    </div>);
  }
}

export default SearchIndexUserItem;
