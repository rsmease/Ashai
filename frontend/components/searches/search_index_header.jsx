import React from 'react';
import { Router, Link, WithRouter } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import * as MaterialDesign from 'react-icons/lib/md';

class SearchIndexHeader extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (<div className="results-index-header-container">
      <MaterialDesign.MdSearch className="results-index-header-icon" />
      <div className="results-index-header-grouping">
        <h4 className="results-index-header-text">Results Matching</h4>
        <Highlighter
          className="results-index-header-text"
          highlightClassName="results-index-header-text results-index-item-bold results-index-item-underline"
          searchWords={[this.props.searchVal]}
          autoEscape={true}
          textToHighlight={this.props.searchVal} />
      </div>
    </div>);
  }
}

export default SearchIndexHeader;
