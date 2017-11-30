import React from 'react';
import { Router, Link, WithRouter } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import * as MaterialDesign from 'react-icons/lib/md';

class SearchIndexHeader extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(<div className="results-index-item-container results-index-header-wrapper">
        <MaterialDesign.MdSearch className="results-index-header-search-icon"/>
        <div className="results-index-header-container">
          <h4 className="results-index-header-text">Results Matching </h4>
          <Highlighter
            className="results-index-header-text"
            highlightClassName="results-index-header-text results-index-bold results-index-underline"
            searchWords={[this.props.searchVal]}
            autoEscape={true}
            textToHighlight={this.props.searchVal}/>
        </div>
    </div>);
  }
}

export default SearchIndexHeader;
