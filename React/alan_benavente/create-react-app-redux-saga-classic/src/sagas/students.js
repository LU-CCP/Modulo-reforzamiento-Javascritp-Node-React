import {
  all,
  call,
  delay,
  fork,
  put,
  putResolve,
  takeLatest
} from 'redux-saga/effects';

import { getStudents, setStatus, GET_STUDENTS } from '../actions/students';
import { studentsApi } from '../services';
import { MESSAGES } from '../config/messages';

const { ERROR_MSG } = MESSAGES;
const { todos: obtenerStudents, postStudent } = studentsApi;

function* ObtenerStudents() {
  try {
    const { ok, data } = yield call(getStudents);
    if (!ok) {
      yield call(alert, ERROR_MSG);
      return;
    }
    //   yield putResolve(setStudent(data));
  } catch (err) {
    yield call(alert, ERROR_MSG);
  }
}

function* watcher() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([takeLatest(GET_STUDENTS, getStudents)]);
  } catch (err) {
    throw err;
  }
}

export default [fork(watcher)];
