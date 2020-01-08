import { all, fork, takeLatest, call, putResolve } from 'redux-saga/effects';

import { FETCH_STUDENTS } from '../actions/students';
import { studentsApi } from '../services';
import { MESSAGES } from '../config/messages';
import { setStatus } from '../actions/example';

const { ERROR_MSG } = MESSAGES;
const {
  todos: { getTodo }
} = studentsApi;

function* fetchStudent() {
  try {
    const { ok, data } = yield call(getTodo);

    if (!ok) {
      yield call(alert, ERROR_MSG);

      return;
    }

    yield putResolve(setStatus(data));
  } catch (error) {
    console.log(error);
    yield call(alert, ERROR_MSG);
  }
}

function* watcher() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([takeLatest(FETCH_STUDENTS, fetchStudent)]);
    // yield all([takeLatest(SAVE_STUDENT, saveStudent)]);
  } catch (err) {
    throw err;
  }
}

export default [fork(watcher)];
