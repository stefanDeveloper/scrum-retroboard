import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ipcRenderer, remote, Notification } from 'electron';
import { autoUpdater } from 'electron-updater';
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

ipcRenderer.on('error', (event, text) => {
  remote.dialog.showMessageBox(null, {
    type: 'error',
    buttons: ['Ok'],
    defaultId: 0,
    title: 'Error',
    message: 'Hupsi something went wrong',
    detail: text
  });
});

ipcRenderer.on('checking-for-update', (event, text, info) => {
  new Notification({
    title: 'Checking for Updates...',
    subtitle: info,
    body: text
  }).show();
});

ipcRenderer.on('update-available', (event, text, info) => {
  remote.dialog.showMessageBox(
    null,
    {
      type: 'question',
      buttons: ['No', 'Yes'],
      defaultId: 1,
      title: 'Update',
      message: `Do you want to update our board to the version ${
        info.version
      }?`,
      detail: text
    },
    response => {
      if (response === 1) {
        autoUpdater.quitAndInstall();
      }
    }
  );
});

ipcRenderer.on('update-not-available', (event, text, info) => {
  remote.dialog.showMessageBox(null, {
    type: 'info',
    buttons: ['Ok'],
    defaultId: 0,
    title: 'Update',
    message: `You are on the newest version ${info.version}`,
    detail: text
  });
});
