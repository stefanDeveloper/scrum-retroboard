import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import BoardPage from './containers/BoardPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.BOARD} component={BoardPage} />
    </Switch>
  </App>
);
