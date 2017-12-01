import _ from 'lodash';

export const myTeamsArray = (teams, myTeamIds) => {
  return myTeamIds.map(id => teams[id]);
};

export const currentUserProjects(projects) {

};
