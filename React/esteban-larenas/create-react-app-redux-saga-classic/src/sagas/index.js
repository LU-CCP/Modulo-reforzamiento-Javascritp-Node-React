import { all } from 'redux-saga/effects';

// import example from './example';
import example from './example';
import student from './students';

function* root() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([...example, ...student]);
  } catch (err) {
    throw err;
  }
}

export default root;
