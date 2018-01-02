import React from 'react';
import { Router, Link, WithRouter } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import * as MaterialDesign from 'react-icons/lib/md';

class ResultsIndexProjectItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="results-index-item-container">
      <Link className="result-index-item-clickable"
        to={`/projects/${this.props.project.id}`}
        onClick={this.props.clearState}>
        <MaterialDesign.MdAssignmentTurnedIn
          className="results-index-subheader-icon" />
        <div className="results-index-right-container">
          <Highlighter
            className="results-index-name"
            highlightClassName="results-index-bold results-index-underline"
            searchWords={[this.props.searchVal]}
            autoEscape={true}
            textToHighlight={this.props.project.name} />
          <Highlighter
            className="results-index-context"
            highlightClassName="results-index-bold"
            searchWords={[this.props.searchVal]}
            autoEscape={true}
            textToHighlight={this.props.project.description} />
        </div>
      </Link>
    </div>);
  }
}

export default ResultsIndexProjectItem;
