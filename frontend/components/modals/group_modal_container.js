import {
    connect
} from 'react-redux';

import {
    removeAllProjectModalErrors,
    createNewProject,
    requestUpdateToProject,
    requestToDeleteProject
} from '../../actions/project_actions';

import {
    removeAllTeamModalErrors,
    createNewTeam,
    requestUpdateToTeam,
    requestToDeleteTeam
} from '../../actions/team_actions';

import GroupModal from './group_modal';

//closeModal: function for close react-modal
//modalAction: create, update or delete
//targetGroup: existing team/project to be updated/delete by modal
const mapStateToProps = (state, ownProps) => {
    if (ownProps.group === "team") {
        return {
            currentUser: state.session.currentUser,
            errors: state.errors,
            targetGroup: ownProps.targetGroup,
            modalAction: ownProps.modalAction,
            closeModal: ownProps.closeModal
        };
    } else if (ownProps.group === "project") {
        return {
            currentUser: state.session.currentUser,
            errors: state.errors,
            targetGroup: ownProps.targetGroup,
            modalAction: ownProps.modalAction,
            closeModal: ownProps.closeModal
        };
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    if (ownProps.group === "team") {
        return {
            removeAllModalErrors: () => dispatch(removeAllTeamModalErrors()),
            createNewGroup: formTeam => dispatch(createNewTeam(formTeam)),
            requestUpdateToGroup: formTeam => dispatch(requestUpdateToTeam(formTeam)),
            requestToDeleteGroup: teamId => dispatch(requestToDeleteTeam(teamId))
        };
    } else if (ownProps.group === "project") {
        return {
            removeAllModalErrors: () => dispatch(removeAllProjectModalErrors()),
            createNewGroup: formProject => dispatch(createNewProject(formProject)),
            requestUpdateToGroup: formProject => dispatch(requestUpdateToProject(formProject)),
            requestToDeleteGroup: projectId => dispatch(requestToDeleteProject(projectId))
        };
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(GroupModal);