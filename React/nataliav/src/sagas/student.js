import {
  all,
  call,
  delay,
  fork,
  put,
  putResolve,
  takeLatest
} from 'redux-saga/effects';

import { FETCH_STUDENT, setStudent, SAVE_STUDENT } from '../actions/student';
import { studentApi } from '../services';
import { MESSAGES } from '../config/messages';

const { ERROR_MSG } = MESSAGES;

const {
  todos: { getStudents, postStudents }
  todos: { getStudents, postStudents }
  todos: { getStudents, postStudents }
} = studentApi;

function* fetchStudent() {
  try {
    const { ok, data } = yield call(getStudents);

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
