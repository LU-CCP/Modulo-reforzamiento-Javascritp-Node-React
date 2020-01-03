import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Example } from '../../containers';
import { ROOT } from '../paths';

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Example} />
  </Switch>
);

export default Routes;
