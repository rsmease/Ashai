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
                    <ResultsIndexContainer
                        source={this.props.source}
                        searchVal={this.state.searchVal} />
                </div>
            </div>
        );
    }


}

export default OnClickOutside(SearchBar);