import { fetchProject,
         fetchAllProjects,
         postProject
} from '../util/project_util';

export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';

const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
});

const receiveAllProjects = (projects) => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

export const requestProject = (projectId) => (dispatch) =>
  fetchProject(projectId).then(fetchedProject =>
    dispatch(receiveProject(fetchedProject)));

export const requestAllProjects = () => (dispatch) => fetchAllProjects()
  .then(fetchedProjects => dispatch(receiveAllProjects(fetchedProjects)));

export const createNewProject = (formProject) => (dispatch) =>
  postProject(formProject).then(createdProject =>
    receiveProject(createdProject));
