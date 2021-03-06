import { all } from 'redux-saga/effects';

import student from './students';

function* root() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([...student]);
  } catch (err) {
    throw err;
  }
}

export default root;
