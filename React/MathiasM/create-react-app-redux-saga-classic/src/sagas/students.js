import { all, call, fork, takeLatest } from 'redux-saga/effects';

import { GET_STUDENTS } from '../actions/students';
import { studentApi } from '../services';
import { MESSAGES } from '../config/messages';

const { ERROR_MSG } = MESSAGES;
const {
  todos: { getTodo }
} = studentApi;

function* fetchStudent() {
  try {
    const { ok } = yield call(getTodo);

    // eslint-disable-next-line no-console
    console.log('df');

    if (!ok) {
      yield call(alert, ERROR_MSG);

      return;
    }

    // yield putResolve(getStudents(data));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    yield call(alert, ERROR_MSG);
  }
}

function* watcher() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([takeLatest(GET_STUDENTS, fetchStudent)]);
  } catch (err) {
    throw err;
  }
}

export default [fork(watcher)];
