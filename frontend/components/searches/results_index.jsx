//utils
import React from 'react';

//components
import ResultsIndexItem from './results_index_item';
import SearchIndexHeader from './results_index_header';


class ResultsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.requestAllUsers) {
            this.props.requestAllUsers();
        }
    }

    showUsers(limit) {
        return (
            <ul>
                {this.props.userSearchResults.slice(0, limit).map(
                    (user) =>
                        (<ResultsIndexItem
                            key={Math.random()}
                            resultType={"user"}
                            currentTarget={user}
                            source={this.props.source}
                            searchVal={this.props.searchVal}
                            clearState={this.props.clearState} />)
                )}
            </ul>
        );
    }

    showNonMembers(limit) {
        let nonMembers = this.props.userSearchResults.filter(user => this.props.group.members_by_id.indexOf(user.id) === -1);
        return (
            <ul>
                {nonMembers.slice(0, limit).map(
                    (nonMember) =>
                        (<ResultsIndexItem
                            key={Math.random()}
                            group={this.props.group}
                            resultType={"non-member"}
                            currentTarget={nonMember}
                            source={this.props.source}
                            groupType={this.props.groupType}
                            searchVal={this.props.searchVal}
                            clearState={this.props.clearState}
                            createNewMembership={this.props.createNewMembership} />)
                )}
            </ul>
        );
    }

    showProjects(limit) {
        return (
            <ul>
                {this.props.projectSearchResults.slice(0, limit).map(
                    (project) =>
                        (<ResultsIndexItem
                            resultType={"project"}
                            key={Math.random()}
                            currentTarget={project}
                            source={this.props.source}
                            searchVal={this.props.searchVal}
                            clearState={this.props.clearState} />)
                )}
            </ul>
        );
    }

    showTeams(limit) {
        return (
            <ul>
                {this.props.teamSearchResults.slice(0, limit).map(
                    (team) =>
                        (<ResultsIndexItem
                            resultType={"team"}
                            key={Math.random()}
                            currentTarget={team}
                            source={this.props.source}
                            searchVal={this.props.searchVal}
                            clearState={this.props.clearState} />)
                )}
            </ul>
        );
    }

    //add assignee request
    showTasks(limit) {
        return (
            <ul>
                {this.props.taskSearchResults.slice(0, limit).map(
                    (task) =>
                        (<ResultsIndexItem
                            resultType={"task"}
                            key={Math.random()}
                            currentTarget={task}
                            users={this.props.users}
                            source={this.props.source}
                            searchVal={this.props.searchVal}
                            clearState={this.props.clearState} />)
                )}
            </ul>
        );
    }

    showResults() {
        switch (this.props.source) {
            case "global-header":
                return (
                    <ul>
                        <SearchIndexHeader searchVal={this.props.searchVal} />
                        {this.showUsers(2)}
                        {this.showProjects(2)}
                        {this.showTeams(2)}
                        {this.showTasks(2)}
                    </ul>
                );
            case "sidebar-group-members-index":
                return (<ul>
                    {this.showNonMembers(5)}
                </ul>);
            case "project-detail":
                return (<ul>
                    {this.showNonMembers(5)}
                </ul>);
            default:
                return <div></div>;
        }
    }

    render() {
        if (this.props.searchVal === "") {
            return <div></div>;
        } else {
            return (
                <div className={`${this.props.source}-results-alignment-container`}>
                    {this.showResults()}
                </div>
            );
        }
    }
}

export default ResultsIndex;