//core utils
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';
import { logout } from './actions/session_actions';
import Modal from 'react-modal';

//testing modules
import { searchProjects } from './actions/search_actions';
import { fetchProjectSearchResults } from './util/search_util';

document.addEventListener('DOMContentLoaded', () => {

  window.store = createStore();
  window.searchProjects = searchProjects;
  window.fetchProjectSearchResults = fetchProjectSearchResults;

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
