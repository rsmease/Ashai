// import { RECEIVE_PROJECT, RECEIVE_ALL_PROJECTS } from '../actions/project_actions';
// import _ from 'lodash';
//
// export default (state = {}, action) => {
//   Object.freeze(state);
//   switch (action.type) {
//     case RECEIVE_PROJECT:
//       const receivedProject = action.project;
//       return _.merge({}, state, {[receivedProject.id]: receivedProject} );
//     case RECEIVE_ALL_PROJECTS:
//       const allProjects = action.projects;
//       return _.merge({}, state, allProjects);
//     default:
//       return state;
//   }
// };
