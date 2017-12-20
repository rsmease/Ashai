import {
    connect
} from 'react-redux';

import {
    requestToDeleteProject,
    requestAllProjects
} from '../../actions/project_actions';
import {
    requestToDeleteTeam
} from '../../actions/team_actions';

import Sidebar from './sidebar';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    projects: state.entities.projects,
    teams: state.entities.teams
});

const mapDispatchToProps = (dispatch) => ({
    requestToDeleteProject: projectId =>
        dispatch(requestToDeleteProject(projectId)),
    requestToDeleteTeam: teamId =>
        dispatch(requestToDeleteTeam(teamId)),
    requestAllProjects: () => dispatch(requestAllProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);