import {
    RECEIVE_PROJECT,
    RECEIVE_ALL_PROJECTS,
    REMOVE_PROJECT
} from '../../actions/project_actions';

import {
    RECEIVE_TASK,
    REMOVE_TASK
} from '../../actions/task_actions';

import {
    addUniqueToProjectTasks,
    removeDeleted
} from '../selectors';

import _ from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PROJECT:
            const receivedProject = action.project;
            return _.merge({}, state, {
                [receivedProject.id]: receivedProject
            });
        case RECEIVE_ALL_PROJECTS:
            const allProjects = action.projects;
            return _.merge({}, state, allProjects);
        case REMOVE_PROJECT:
            let newState = _.merge({}, state);
            delete newState[action.projectId];
            return newState;
        case RECEIVE_TASK:
            if (action.projectId === null) {
                return _.merge({}, state);
            } else {
                let updatedProjectId = action.projectId;
                state[updatedProjectId].tasks =
                    addUniqueToProjectTasks(
                        action.task,
                        state[updatedProjectId].tasks,
                        state[updatedProjectId]);
                return _.merge({}, state);
            }
        case REMOVE_TASK:
            if (action.projectId === null) {
                return _.merge({}, state);
            } else {
                let updatedProjectId = action.projectId;
                state[updatedProjectId].tasks = removeDeleted(action.taskId, state[updatedProjectId].tasks);
                return _.merge({}, state);
            }
        default:
            return state;
    }
};