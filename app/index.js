import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ipcRenderer } from 'electron';
import fs from 'fs';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.css';

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    // eslint-disable-next-line global-require
    const NextRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}

ipcRenderer.on('open-file', (event, data) => {
  try {
    const points = JSON.parse(data);
    store.dispatch({ type: 'LOAD', points });
  } catch (e) {
    // TODO Handle error
  }
});

ipcRenderer.on('new-sprint', () => {
  store.dispatch({ type: 'NEW_SPRINT' });
});

ipcRenderer.on('save-file', (event, path) => {
  const { points } = store.getState();
  fs.writeFile(path, JSON.stringify(points), () => {
    // TODO handle error
  });
});
