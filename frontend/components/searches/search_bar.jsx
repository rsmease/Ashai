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
        switch (this.props.source) {
            case "global-header":
                this.setState({ searchVal: newVal, firstTime: false }, () => {
                    this.props.searchUsers(this.state.searchVal);
                    this.props.searchProjects(this.state.searchVal);
                    this.props.searchTeams(this.state.searchVal);
                });
                break;
            default:
                this.setState({ searchVal: newVal, firstTime: false }, () => {
                    this.props.searchTeams(this.state.searchVal);
                });
                break;
        }
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
        this.setState({ placeholderVal: '' });
    }

    toggleDisplayClass() {
        return `${this.props.source}-section`;
    }

    render() {
        return (
            <div className={this.toggleDisplayClass()}>
                <div className="search-field">
                    <MaterialDesign.MdSearch />
                    <input
                        type="text"
                        value={this.state.searchVal}
                        onChange={this.handleChange}
                        onFocus={this.removePlaceholderVal}
                        placeholder={this.state.placeholderVal}>
                    </input>
                    <ResultsIndex
                        parent={"NavBar"}
                        firstTime={this.state.firstTime}
                        userSearchResults={Object.values(this.props.userSearchResults)}
                        projectSearchResults={
                            Object.values(this.props.projectSearchResults)}
                        teamSearchResults={
                            Object.values(this.props.teamSearchResults)}
                        currentUser={this.props.currentUser}
                        searchVal={this.state.searchVal}
                        clearState={this.clearState} />
                </div>
            </div>
        );
    }


}

export default OnClickOutside(NavBarSearch);