import React from 'react';
import { Router, Link, WithRouter } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';
import Highlighter from 'react-highlight-words';

class SidebarResultsUserItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(<div className="results-index-item-container
    add-members-item-container">
        <div className="search-result-clickable"
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
              textToHighlight={this.props.user.name}/>
            <Highlighter
              className="results-index-context"
              highlightClassName="results-index-bold"
              searchWords={[this.props.searchVal]}
              autoEscape={true}
              textToHighlight={this.props.user.email}/>
          </div>
        </div>
    </div>);
  }
}

export default SidebarResultsUserItem;
