import {
    connect
} from 'react-redux';

import {
    requestToDeleteProject,
    requestAllProjects
} from '../../actions/project_actions';

import {
    requestToDeleteTeam,
    requestAllTeams
} from '../../actions/team_actions';

import SidebarIndex from './sidebar_index';

const mapStateToProps = (state, ownProps) => {
    if (ownProps.groupType === "team") {
        return {
            groupType: ownProps.groupType,
            currentUser: state.session.currentUser,
            currentUserGroups: state.session.currentUser.teams
        };
    } else {
        return {
            groupType: ownProps.groupType,
            currentUser: state.session.currentUser,
            currentUserGroups: state.session.currentUser.projects
        };
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    if (ownProps.groupType === "team") {
        return {
            requestToDeleteTeam: teamId =>
                dispatch(requestToDeleteTeam(teamId)),
            requestAllTeams: () => dispatch(requestAllTeams())
        };
    } else {
        return {
            requestToDeleteProject: projectId =>
                dispatch(requestToDeleteProject(projectId)),
            requestAllProjects: () => dispatch(requestAllProjects())
        };
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarIndex);