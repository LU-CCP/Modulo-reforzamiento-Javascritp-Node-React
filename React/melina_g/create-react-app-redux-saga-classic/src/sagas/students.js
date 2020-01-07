import {
  all,
  call,
  // delay,
  fork,
  // put,
  // putResolve,
  takeLatest
} from 'redux-saga/effects';

import { FETCH_STUDENTS } from '../actions/students';
import { studentApi } from '../services';
import { MESSAGES } from '../config/messages';

const { ERROR_MSG } = MESSAGES;
const {
  todos: { getStudents }
} = studentApi;

function* fetchStudents() {
  try {
    const { ok, data } = yield call(getStudents);

    if (!ok) {
      yield call(alert, ERROR_MSG);

      return;
    }
  } catch (err) {
    console.log(err);
    yield call(alert, ERROR_MSG);
  }
}

function* watcher() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([takeLatest(FETCH_STUDENTS, fetchStudents)]);
    yield;
  } catch (err) {
    throw err;
  }
}

export default [fork(watcher)];
