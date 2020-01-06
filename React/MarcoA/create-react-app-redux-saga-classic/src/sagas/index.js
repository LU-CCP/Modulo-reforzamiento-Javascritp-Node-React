import { all } from 'redux-saga/effects';

import example from './example';
import student from './student';

function* root() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([...student, ...example]);
  } catch (err) {
    throw err;
  }
}

export default root;
