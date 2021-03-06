import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Example } from '../../containers';
import Students from '../../containers/home/Students';
import { ROOT, STUDENTS } from '../paths';

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Example} />
    <Route exact path={STUDENTS} component={Students} />
  </Switch>
);

export default Routes;
