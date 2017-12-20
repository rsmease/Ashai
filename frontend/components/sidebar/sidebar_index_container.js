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
    if (ownProps.group === "team") {
        return {
            currentUser: state.session.currentUser,
            teams: state.entities.teams
        };
    } else {
        return {
            currentUser: state.session.currentUser,
            projects: state.entities.projects
        };
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    if (ownProps.group === "team") {
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