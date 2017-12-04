import React from 'react';
import ResultsIndexUserItem from './results_index_user_item';
import SidebarResultsUserItem from './sidebar_results_user_item';
import SearchIndexHeader from './search_index_header';


class ResultsIndex extends React.Component  {
  constructor(props) {
    super(props);
  }

  renderFoundUsers() {
      return (
        <div className="nav-search-results">
        <ul>
          <SearchIndexHeader searchVal={this.props.searchVal}/>
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
      </div>
      );
  }

  renderSidebarResults() {
    return (
      <div className="add-members-results-container">
        <ul className="add-members-results">
          {this.props.userSearchResults.map(
            (user) =>
            (<SidebarResultsUserItem
              createNewTeamMembership={this.props.createNewTeamMembership}
              isOwner={this.props.isOwner}
              currentUser={this.props.currentUser}
              key={Math.random()}
              user={user}
              group={this.props.group}
              clearState={this.props.clearState}
              searchVal={this.props.searchVal}/>)
            )}
          </ul>
      </div>
    );
  }

  renderIndex() {
    if (this.props.parent === "Sidebar") {
      return this.renderSidebarResults();
    } else if (this.props.parent === "NavBar") {
      return this.renderFoundUsers();
    }
  }


  render() {
    if (this.props.searchVal === "") {
      return <div></div>;
    } else {
      return (
        <div className="">
          {this.renderIndex()}
        </div>
      );
    }
  }
}

export default ResultsIndex;
