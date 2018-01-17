//utils
import React from 'react';
import {
    connect
} from 'react-redux';

//actions
import {
    requestProject
} from '../../actions/project_actions';
import {
    requestTeam
} from '../../actions/team_actions';
import {
    requestUser
} from '../../actions/user_actions';

//components
import LocalHeader from './local_header';

const mapStateToProps = (state, ownProps) => {

    let entityType;
    let entityId;
    let entities;

    if (ownProps.location === "app") {
        entityType = "currentUser";
        entityId = state.session.currentUser.id;
    } else {
        entityType = ownProps.location.split("/")[0].slice(0, -1);
        entityId = parseInt(ownProps.location.split("/")[1]);
        if (entityId === state.session.currentUser.id) {
            entityType = "currentUser";
        }
    }

    switch (entityType) {
        case "team":
            entities = state.entities.teams;
            break;
        case "project":
            entities = state.entities.projects;
            break;
        default:
            entities = state.entities.users;
    }

    return {
        currentUser: state.session.currentUser,
        entityType: entityType,
        entityId: entityId,
        entities: entities
    };

};

const mapDispatchToProps = (dispatch, ownProps) => ({
    requestProject: projectId => dispatch(requestProject(projectId)),
    requestTeam: teamId => dispatch(requestTeam(teamId)),
    requestUser: userId => dispatch(requestUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LocalHeader);