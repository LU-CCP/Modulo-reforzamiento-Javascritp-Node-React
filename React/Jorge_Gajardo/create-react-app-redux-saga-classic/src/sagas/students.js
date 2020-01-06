import {
  all,
  call,
  delay,
  fork,
  put,
  putResolve,
  takeLatest
} from 'redux-saga/effects';

import { getStudents, GET_STUDENTS } from '../actions/students';
import { studentApi } from '../services';
import { MESSAGES } from '../config/messages';

const { ERROR_MSG } = MESSAGES;
const { todos: getTodo } = studentApi;

function* fetchStudents() {
  try {
    const { ok, data } = yield call(getTodo);

    console.log('df');

    if (!ok) {
      yield call(alert, ERROR_MSG);

      return;
    }

    // yield putResolve(getStudents(data));
  } catch (err) {
    console.log(err);
    yield call(alert, ERROR_MSG);
  }
}

function* watcher() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([takeLatest(GET_STUDENTS, fetchStudents)]);
  } catch (err) {
    throw err;
  }
}

export default [fork(watcher)];
