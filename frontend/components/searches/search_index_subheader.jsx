import React from 'react';
import { Router, Link, WithRouter } from 'react-router-dom';

class SearchIndexSubheader extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div className="results-index-item-container
        results-index-header-wrapper">
        <div className="results-index-header-container">
          <h4 className="results-index-header-text">{this.props.type}</h4>
        </div>
      </div>
    );
  }
}

export default SearchIndexSubheader;
