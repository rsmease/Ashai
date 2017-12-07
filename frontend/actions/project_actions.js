import { fetchProject,
         fetchAllProjects,
         postProject,
         updateProject,
         deleteProject,
         postProjectMembership
} from '../util/project_util';

export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_PROJECT_MEMBERSHIP = 'RECEIVE_PROJECT_MEMBERSHIP'
export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT_MODAL_ERRORS = 'RECEIVE_PROJECT_MODAL_ERRORS';
export const REMOVE_MODAL_ERRORS = 'REMOVE_MODAL_ERRORS';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
});

const receiveProjectMembership = (projectMembership) => ({
  type: RECEIVE_TEAM_MEMBERSHIP,
  memberId: projectMembership.member_id,
  project_id: projectMembership.project_id
});

const receiveAllProjects = (projects) => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

const removeProject = (project) => ({
  type: REMOVE_PROJECT,
  projectId: project.id
});

const receiveProjectModalErrors = (errors) => ({
  type: RECEIVE_PROJECT_MODAL_ERRORS,
  errors: errors
});

const removeProjectModalErrors = () => ({
  type: REMOVE_MODAL_ERRORS
});

export const requestProject = (projectId) => (dispatch) =>
  fetchProject(projectId).then(fetchedProject =>
    dispatch(receiveProject(fetchedProject)));

export const requestAllProjects = () => (dispatch) => fetchAllProjects()
  .then(fetchedProjects => dispatch(receiveAllProjects(fetchedProjects)));

export const createNewProject = (formProject) => (dispatch) =>
  postProject(formProject).then(createdProject =>
    dispatch(receiveProject(createdProject)),
    err => (dispatch(receiveProjectModalErrors(err.responseJSON))));

export const requestUpdateToProject = (projectFormData) => (dispatch) => (
  updateProject(projectFormData)
  .then(updatedProject => dispatch(receiveProject(updatedProject)),
  err => (dispatch(receiveProjectModalErrors(err.responseJSON))))
);

export const requestToDeleteProject = (projectId) => (dispatch) =>
  deleteProject(projectId).then((deletedProject) =>
    dispatch(removeProject(deletedProject)));

export const createNewProjectMembership = (projectMembershipRequest) => (dispatch) =>
  postProjectMembership(projectMembershipRequest).then(updatedProject =>
  dispatch(receiveProject(updatedProject)));


export const removeAllProjectModalErrors = () => (dispatch) =>
  dispatch(removeProjectModalErrors());
