//utils
import React from 'react';
import OnClickOutside from 'react-onclickoutside';
import * as MaterialDesign from 'react-icons/lib/md';

//components
import ResultsIndexContainer from './results_index_container';

class SearchBar extends React.Component {
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

    showHeader() {
        switch (this.props.source) {
            case "sidebar-group-members-index":
                return <h1>Add Members</h1>
            default:
                break;
        }
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
            case "sidebar-group-members-index":
                this.setState({ searchVal: newVal, firstTime: false }, () => {
                    this.props.searchUsers(this.state.searchVal);
                });
                break;
            case "project-detail":
                this.setState({ searchVal: newVal, firstTime: false }, () => {
                    this.props.searchUsers(this.state.searchVal);
                });
                break;
            default:
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
        switch (this.props.source) {
            case "global-header":
                return "global-header-section";
            case "sidebar-group-members-index":
                return "sidebar-add-member-alignment-container";
            case "project-detail":
                return "project-detail-alignment-container";
            default:
                break;
        }
    }

    render() {
        return (
            <div className={this.toggleDisplayClass()}>
                {this.showHeader()}
                <div className={`${this.props.source}-search-field`}>
                    <MaterialDesign.MdSearch />
                    <input
                        type="text"
                        value={this.state.searchVal}
                        onChange={this.handleChange}
                        onFocus={this.removePlaceholderVal}
                        placeholder={this.state.placeholderVal}>
                    </input>
                    <ResultsIndexContainer
                        group={this.props.group}
                        source={this.props.source}
                        groupType={this.props.groupType}
                        searchVal={this.state.searchVal}
                        clearState={this.clearState} />
                </div>
            </div>
        );
    }


}

export default OnClickOutside(SearchBar);