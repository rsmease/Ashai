import React from 'react';
import ResultsIndex from './results_index';
import OnClickOutside from 'react-onclickoutside';
import * as MaterialDesign from 'react-icons/lib/md';

class NavBarSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: '',
      firstTime: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const newVal = e.target.value;
    this.setState({ searchVal: newVal, firstTime: false }, () => {
      this.props.searchUsers(this.state.searchVal);
    });
  }

  clearState() {
    this.setState({ searchVal: '', firstTime: false });
  }

  handleClickOutside() {
    this.clearState();
  }

  render() {
    return (
      <div className="search-bar-container">
        <div className="search-field">
          <MaterialDesign.MdSearch/>
          <input onChange={this.handleChange} type="text"
           placeholder="Search"
           value={this.state.searchVal}>
          </input>
          <ResultsIndex
            firstTime={this.state.firstTime}
            userSearchResults={Object.values(this.props.userSearchResults)}
            currentUser={this.props.currentUser}
            searchVal={this.state.searchVal}
            clearState={this.clearState}/>
        </div>
      </div>
    );
  }


}

export default OnClickOutside(NavBarSearch);
