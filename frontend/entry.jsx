//core utils
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';
import { logout } from './actions/session_actions';
import Modal from 'react-modal';

//testing modules
import { fetchTeam, fetchAllTeams } from './util/team_util';
import { searchUsers } from './actions/search_actions';
import { postTeamMembership, postTeam } from './util/team_util';

document.addEventListener('DOMContentLoaded', () => {
  //bootstrap user

  window.postTeam = postTeam;
  window.postTeamMembership = postTeamMembership;

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = createStore(preloadedState);
    delete window.currentUser;
  } else {
    store = createStore();
  }

  //execution
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);

});
