import { all } from 'redux-saga/effects';

import example from './example';
import students from './students';

function* root() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([...example, ...students]);
  } catch (err) {
    throw err;
  }
}

export default root;
