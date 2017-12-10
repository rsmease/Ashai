import React from 'react';
import ResultsIndex from './results_index';
import OnClickOutside from 'react-onclickoutside';
import * as MaterialDesign from 'react-icons/lib/md';

class NavBarSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: '',
      placeholderVal: 'Search',
      firstTime: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.clearState = this.clearState.bind(this);
    this.removePlaceholderVal = this.removePlaceholderVal.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const newVal = e.target.value;
    this.setState({ searchVal: newVal, firstTime: false }, () => {
      this.props.searchUsers(this.state.searchVal);
      this.props.searchProjects(this.state.searchVal);
    });
  }

  clearState() {
    this.setState({
      searchVal: '',
      firstTime: false,
      placeholderVal: 'Search'
    });
  }

  handleClickOutside() {
    this.clearState();
  }

  removePlaceholderVal() {
    this.setState({ placeholderVal: ''});
  }

  render() {
    return (
      <div className="search-bar-container">
        <div className="search-field">
          <MaterialDesign.MdSearch/>
          <input onChange={this.handleChange} type="text"
           placeholder={this.state.placeholderVal}
           value={this.state.searchVal}
           onFocus={this.removePlaceholderVal}>
          </input>
          <ResultsIndex
            parent={"NavBar"}
            firstTime={this.state.firstTime}
            userSearchResults={this.props.userSearchResults}
            projectSearchResults={this.props.projectSearchResults}
            currentUser={this.props.currentUser}
            searchVal={this.state.searchVal}
            clearState={this.clearState}/>
        </div>
      </div>
    );
  }


}

export default OnClickOutside(NavBarSearch);
