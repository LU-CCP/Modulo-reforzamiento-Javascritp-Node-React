import { all, call, fork, putResolve, takeLatest } from 'redux-saga/effects';

import { studentApi } from '../services';
import { FETCH_STUDENT, setStudent } from '../actions/student';
import { MESSAGES } from '../config/messages';

const { ERROR_MSG } = MESSAGES;
const {
  todos: { getTodo }
} = studentApi;

function* fetchStudent() {
  try {
    const { ok, data } = yield call(getTodo);

    if (!ok) {
      yield call(alert, ERROR_MSG);

      return;
    }

    yield putResolve(setStudent(data));
  } catch (err) {
    yield call(alert, ERROR_MSG);
  }
}

function* watcher() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([takeLatest(FETCH_STUDENT, fetchStudent)]);
    // yield all([takeLatest(SAVE_STUDENT, saveStudent)]);
  } catch (err) {
    throw err;
  }
}

export default [fork(watcher)];
