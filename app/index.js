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
    const state = JSON.parse(data);
    store.dispatch({ type: 'LOAD', state });
  } catch (e) {
    new Notification({
      title: 'Could not open file!',
      subtitle: 'It looks like you are doing some hacking shit here...',
      body: e
    }).show();
  }
});

ipcRenderer.on('new-sprint', () => {
  store.dispatch({ type: 'NEW_SPRINT' });
});

ipcRenderer.on('save-file', (event, path) => {
  fs.writeFile(path, JSON.stringify(store.getState()), e => {
    new Notification({
      title: 'Could not save file!',
      subtitle: 'It looks like you are doing some hacking shit here...',
      body: e
    }).show();
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
