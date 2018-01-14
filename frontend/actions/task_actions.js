import {
    fetchTask,
    postTask,
    updateTask,
    deleteTask
} from '../util/task_util';

export const RECEIVE_TASK = 'RECEIVE_TASK';
export const RECEIVE_TASK_FORM_ERRORS = 'RECEIVE_TASK_FORM_ERRORS';
export const REMOVE_TASK_FORM_ERRORS = 'REMOVE_TASK_FORM_ERRORS';
export const REMOVE_TASK = 'REMOVE_TASK';

const receiveTask = (task) => ({
    type: RECEIVE_TASK,
    task: task,
    assigneeId: task.assignee_id
});

const removeTask = (task) => ({
    type: REMOVE_TASK,
    taskId: task.id,
    assigneeId: task.assignee_id
});

const receiveTaskFormErrors = (errors) => ({
    type: RECEIVE_TASK_FORM_ERRORS,
    errors: errors
});

const removeTaskFormErrors = () => ({
    type: REMOVE_TASK_FORM_ERRORS
});

export const requestTask = (taskId) => (dispatch) =>
    fetchTask(taskId).then(fetchedTask =>
        dispatch(receiveTask(fetchedTask)));

export const createNewTask = (formTask) => (dispatch) =>
    postTask(formTask).then(createdTask =>
        dispatch(receiveTask(createdTask)),
        err => (dispatch(receiveTaskFormErrors(err.responseJSON))));

export const requestUpdateToTask = (formTask) => (dispatch) => (
    updateTask(formTask)
    .then(updatedTask => dispatch(receiveTask(updatedTask)),
        err => (dispatch(receiveTaskFormErrors(err.responseJSON))))
);

export const requestToDeleteTask = (taskId) => (dispatch) =>
    deleteTask(taskId).then((deletedTask) =>
        dispatch(removeTask(deletedTask)));

export const removeAllTaskFormErrors = () => (dispatch) =>
    dispatch(removeTaskFormErrors());