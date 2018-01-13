//utils
import React from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import createStore from './store/store';

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

  //render components
  const root = document.getElementById('root');
  Modal.setAppElement('#root');
  ReactDOM.render(<Root store={store} />, root);

});
