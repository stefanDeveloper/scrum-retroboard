import { Route, Switch } from 'react-router';

import React from 'react';
import App from './containers/App';
import BoardPage from './containers/BoardPage';
import OverviewPage from './containers/OverviewPage';
import routes from './constants/routes';

export default () => (
  <App>
    <Switch>
      <Route path={routes.BOARD} component={BoardPage} />
      <Route path={routes.OVERVIEW} component={OverviewPage} />
    </Switch>
  </App>
);
