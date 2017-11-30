import React from 'react';
import ResultsIndexUserItem from './results_index_user_item';

class ResultsIndex extends React.Component  {
  constructor(props) {
    super(props);
  }

  renderFoundUsers() {
      return (
        <ul>
          {this.props.userSearchResults.map(
              (user) =>
              (<ResultsIndexUserItem
                currentUser={this.props.currentUser}
                key={Math.random()}
                user={user}
                clearState={this.props.clearState}
                searchVal={this.props.searchVal}/>)
            )}
        </ul>
      );
  }


  render() {
    if (this.props.searchVal === "") {
      return <div></div>;
    } else {
      return (
        <div className="nav-search-results">
          {this.renderFoundUsers()}
        </div>
      );
    }
  }
}

export default ResultsIndex;
