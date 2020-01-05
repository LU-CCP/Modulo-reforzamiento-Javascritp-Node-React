import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Example, Students } from '../../containers';
import { ROOT, STUDENT } from '../paths';

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Example} />
    <Route exact path={STUDENT} component={Students} />
  </Switch>
);

export default Routes;
