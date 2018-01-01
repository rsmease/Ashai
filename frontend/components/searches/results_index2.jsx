//utils
import React from 'react';

//components
import SearchIndexHeader from './search_index_header';
import ResultsIndexUserItem from './results_index_user_item';
import ResultsIndexProjectItem from './results_index_project_item';
import ResultsIndexTeamItem from './results_index_team_item';
import SearchIndexSubheader from './search_index_subheader';


class ResultsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    showUsers(limit) {
        return (
            <ul>
                {this.props.userSearchResults.slice(0, limit).map(
                    (user) =>
                        (<ResultsIndexUserItem
                            currentUser={this.props.currentUser}
                            key={Math.random()}
                            user={user}
                            clearState={this.props.clearState}
                            searchVal={this.props.searchVal} />)
                )}
            </ul>
        );
    }

    showProjects(limit) {
        return (
            <ul>
                {this.props.projectSearchResults.slice(0, limit).map(
                    (project) =>
                        (<ResultsIndexProjectItem
                            currentUser={this.props.currentUser}
                            key={Math.random()}
                            project={project}
                            clearState={this.props.clearState}
                            searchVal={this.props.searchVal} />)
                )}
            </ul>
        );
    }

    showTeams(limit) {
        return (
            <ul>
                {this.props.teamSearchResults.slice(0, limit).map(
                    (team) =>
                        (<ResultsIndexTeamItem
                            currentUser={this.props.currentUser}
                            key={Math.random()}
                            team={team}
                            clearState={this.props.clearState}
                            searchVal={this.props.searchVal} />)
                )}
            </ul>
        );
    }

    showResults() {
        switch (this.props.source) {
            case "global-header":
                return (
                    <div className="nav-search-results">
                        <ul>
                            <SearchIndexHeader searchVal={this.props.searchVal} />
                            {this.showUsers(2)}
                            {this.showProjects(2)}
                            {this.showTeams(2)}
                        </ul>
                    </div>
                );
            case "sidebar-group-members-index":
                return <div></div>;
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
                <div className="">
                    {this.showResults()}
                </div>
            );
        }
    }
}

export default ResultsIndex;