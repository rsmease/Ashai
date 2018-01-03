//utils
import React from 'react';
import _ from 'lodash';

//components
import ResultsIndexItem from './results_index_item';
import SearchIndexHeader from './search_index_header';


class ResultsIndex extends React.Component {
    constructor(props) {
        super(props);
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
        let nonMembers = _.difference(this.props.userSearchResults, this.props.group.members);
        return (
            <ul>
                {nonMembers.slice(0, limit).map(
                    (nonMember) =>
                        (<ResultsIndexItem
                            key={Math.random()}
                            resultType={"non-member"}
                            currentTarget={nonMember}
                            source={this.props.source}
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

    showResults() {
        switch (this.props.source) {
            case "global-header":
                return (
                    <ul>
                        <SearchIndexHeader searchVal={this.props.searchVal} />
                        {this.showUsers(2)}
                        {this.showProjects(2)}
                        {this.showTeams(2)}
                    </ul>
                );
            case "sidebar-group-members-index":
                return (<ul>
                    {this.showNonMembers(5)}
                </ul>);
            case "project-members-index":
                return <div></div>;
            default:
                return <div></div>;
        }
    }


    // renderSidebarResults() {
    //     return (
    //         <div className="add-members-results-container">
    //             <ul className="add-members-results">
    //                 {this.props.userSearchResults.map(
    //                     (user) =>
    //                         (<SidebarResultsUserItem
    //                             createNewTeamMembership={this.props.createNewTeamMembership}
    //                             isOwner={this.props.isOwner}
    //                             currentUser={this.props.currentUser}
    //                             key={Math.random()}
    //                             user={user}
    //                             parent={this.props.parent}
    //                             group={this.props.group}
    //                             clearState={this.props.clearState}
    //                             searchVal={this.props.searchVal} />)
    //                 )}
    //             </ul>
    //         </div>
    //     );
    // }

    // renderTransferOwnershipResults() {
    //     return (
    //         <div className="view-members-results-container">
    //             <ul className="add-members-results">
    //                 {this.props.group.members.map(
    //                     (user) =>
    //                         (<SidebarResultsUserItem
    //                             requestUpdateToTeam={this.props.requestUpdateToTeam}
    //                             closeTransferOwnershipModal=
    //                             {this.props.closeTransferOwnershipModal}
    //                             requestUpdateToProject={this.props.requestUpdateToProject}
    //                             parent={"TransferOwnership"}
    //                             searchVal={""}
    //                             key={Math.random()}
    //                             user={user}
    //                             group={this.props.group} />)
    //                 )}
    //             </ul>
    //         </div>
    //     );
    // }

    // renderProjectDetailResults() {
    //     return (
    //         <div className="add-members-results-container">
    //             <ul className="add-members-results">
    //                 {this.props.userSearchResults.map(
    //                     (user) =>
    //                         (<SidebarResultsUserItem
    //                             createNewProjectMembership={this.props.createNewProjectMembership}
    //                             isOwner={this.props.isOwner}
    //                             currentUser={this.props.currentUser}
    //                             key={Math.random()}
    //                             user={user}
    //                             group={this.props.group}
    //                             clearState={this.props.clearState}
    //                             searchVal={this.props.searchVal} />)
    //                 )}
    //             </ul>
    //         </div>
    //     );
    // }

    renderIndex() {
        if (this.props.parent === "Sidebar") {
            return this.renderSidebarResults();
        } else if (this.props.parent === "NavBar") {
            return this.renderNavBarResults();
        } else if (this.props.parent === "ProjectDetail") {
            return this.renderProjectDetailResults();
        } else if (this.props.parent === "TransferOwnership") {
            return this.renderTransferOwnershipResults();
        }
    }


    render() {
        if (this.props.searchVal === "") {
            return <div></div>;
        } else if (this.props.parent === "TransferOwnership") {
            return (
                <div className="group-members-view-container">
                </div>
            );
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