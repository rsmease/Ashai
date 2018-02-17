//utils
import React from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import { requestToOpenSidebar, requestToCloseSidebar } from './actions/ui_actions';
import { requestAllTeams } from './actions/team_actions'

//root component
import Root from './components/root';

//testing modules
import { postTask } from './util/task_util';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = createStore(preloadedState);
    window.store = store;
    delete window.currentUser;
  } else {
    store = createStore();
  }
  window.requestToOpenSidebar = requestToOpenSidebar;
  window.requestToCloseSidebar = requestToCloseSidebar;
  window.requestAllTeams = requestAllTeams;

  //render components
  const root = document.getElementById('root');
  Modal.setAppElement('#root');
  ReactDOM.render(<Root store={store} />, root);

});
