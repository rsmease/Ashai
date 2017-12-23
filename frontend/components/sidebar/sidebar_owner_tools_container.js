import {
    connect
} from 'react-redux';

import {
    requestToDeleteProject,
    requestUpdateToProject
} from '../../actions/project_actions';

import {
    requestToDeleteTeam,
    requestUpdateToTeam
} from '../../actions/team_actions';

import SidebarOwnerTools from './sidebar_owner_tools';

const mapStateToProps = (state, ownProps) => ({
    group: ownProps.group,
    groupType: ownProps.groupType
});

const mapDispatchToProps = (dispatch, ownProps) => {
    if (ownProps.groupType === "team") {
        return {
            reqeustToDeleteGroup: teamId =>
                dispatch(requestToDeleteTeam(teamId)),
            requestUpdateToGroup: (formTeam) => dispatch(requestUpdateToTeam(formTeam))
        };
    } else {
        return {
            requestToDeleteGroup: projectId =>
                dispatch(requestToDeleteProject(projectId)),
            requestUpdateToGroup: (formProject) => dispatch(requestUpdateToProject(formProject))
        };
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarOwnerTools);