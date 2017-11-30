import React from 'react';
import ResultsIndexUserItem from './results_index_user_item';

class ResultsIndex extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }


  componentWillReceiveProps(nextProps) {
    //add user results to users array;
    if (!(nextProps.userSearchResults === undefined)) {
      Object.keys(nextProps.userSearchResults)
      .forEach(userKey =>
        this.state.users.push(nextProps.userSearchResults[userKey]));
    }
  }

  renderFoundUsers() {
    if (this.state.users.length > 0) {
      return (
        <ul>
          {
            this.state.users.map(
              (user) =>
              (<ResultsIndexUserItem
                currentUser={this.props.currentUser}
                user={user}/>)
            )
          }
        </ul>
      );
    } else {
      return (<ul></ul>);
    }
  }


  render () {
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
