import React from 'react';
import { Router, Link, WithRouter } from 'react-router';

class SearchIndexUserItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(<div className="results-index-item-container">
      <img
        class="results-index-image"
        src={this.props.user.profile_image_url}></img>
      <div class="results-index-right-container">
        <h4 class="results-index-name">{this.props.user.name}</h4>
        <h4 class="results-index-context">{this.props.user.email}</h4>
      </div>
    </div>);
  }
}

export default SearchIndexUserItem;
