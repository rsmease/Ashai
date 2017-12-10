import React from 'react';
import { Router, Link, WithRouter } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import * as MaterialDesign from 'react-icons/lib/md';

class ResultsIndexTeamItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(<div className="results-index-item-container">
        <Link className="search-result-clickable"
          to={`/teams/${this.props.team.id}`}
          onClick={this.props.clearState}>
          <MaterialDesign.MdGroup
            className="results-index-subheader-icon"/>
          <div className="results-index-right-container">
            <Highlighter
              className="results-index-name"
              highlightClassName="results-index-bold results-index-underline"
              searchWords={[this.props.searchVal]}
              autoEscape={true}
              textToHighlight={this.props.team.name}/>
            <Highlighter
              className="results-index-context"
              highlightClassName="results-index-bold"
              searchWords={[this.props.searchVal]}
              autoEscape={true}
              textToHighlight={this.props.team.description}/>
          </div>
        </Link>
    </div>);
  }
}

export default ResultsIndexTeamItem;
