import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import AppRoot from './app/app_root';

export default ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <AppRoot />
    </HashRouter>
  </Provider>
);
