import React from 'react';
import ResultsIndex from './results_index';
import * as MaterialDesign from 'react-icons/lib/md';

class AddMembersSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: '',
      placeholderVal: 'Search Users',
      isOwner: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.clearState = this.clearState.bind(this);
    this.removePlaceholderVal = this.removePlaceholderVal.bind(this);
    this.formType = this.formType.bind(this);
    this.addType = this.addType.bind(this);
  }

  componentWillMount() {
      this.toggleOwnership();
  }

  toggleOwnership() {
    if (this.props.group.team_owner_id === undefined) {
      if (this.props.currentUser.id === this.props.group.project_owner_id) {
        this.setState({ isOwner: true });
      }
    } else {
      if (this.props.currentUser.id === this.props.group.team_owner_id) {
        this.setState({ isOwner: true });
      }
    }
  }

  handleChange(e) {
    e.preventDefault();
    const newVal = e.target.value;
    this.setState({ searchVal: newVal}, () => {
      this.props.searchUsers(this.state.searchVal);
    });
  }

  clearState() {
    this.setState({
      searchVal: '',
      firstTime: false,
      placeholderVal: 'Search'
    });
  }

  handleClose() {
    this.clearState();
  }

  removePlaceholderVal() {
    this.setState({ placeholderVal: ''});
  }

  formType(){
    if (this.props.parent === "Sidebar") {
      return "add-members-form-sidebar";
    } else if (this.props.parent === "ProjectDetail") {
      return "add-members-form-project-detail";
    }
  }

  addType() {
    if (this.props.parent === "Sidebar") {
      return <div><MaterialDesign.MdFlashOn/> Fast Add</div>;
    } else if (this.props.parent === "ProjectDetail") {
      return "Add New Members";
    }
  }

  render() {
    return (
      <form className={this.formType()}>
        <h2 className="add-members-header-primary">
          {`${this.props.group.name}`}</h2>
        <h2 className="add-members-header-secondary">
          {this.addType()}</h2>
        <div className="sidebar-members-search-container">
          <div className="search-field">
            <MaterialDesign.MdSearch/>
            <input onChange={this.handleChange} type="text"
              placeholder={this.state.placeholderVal}
              value={this.state.searchVal}
              onFocus={this.removePlaceholderVal}>
            </input>
            <ResultsIndex
              createNewTeamMembership={this.props.createNewTeamMembership}
              createNewProjectMembership={this.props.createNewProjectMembership}
              parent={this.props.parent}
              group={this.props.group}
              isOwner={this.state.isOwner}
              userSearchResults={Object.values(this.props.userSearchResults)}
              currentUser={this.props.currentUser}
              searchVal={this.state.searchVal}
              clearState={this.clearState}/>
          </div>
      </div>
    </form>
    );
  }


}

export default AddMembersSearch;
