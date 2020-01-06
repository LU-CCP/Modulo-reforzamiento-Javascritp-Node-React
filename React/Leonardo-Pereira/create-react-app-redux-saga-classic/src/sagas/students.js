import {
  all,
  call,
  delay,
  fork,
  put,
  putResolve,
  takeLatest
} from 'redux-saga/effects';
import { MESSAGES } from '../config/messages';

import { GET_STUDENT } from '../actions/students';
import { studentApi } from '../services';

const { ERROR_MSG } = MESSAGES;

const {
  todos: { getTodo }
} = studentApi;

function* getEstudiantes() {
  try {
    const { ok, data } = yield call(getTodo);
    if (!ok) {
      yield call(alert, ERROR_MSG);
      return;
    }

    //yield putResolve(getStudent.data);
  } catch (err) {
    console.log(err);
    yield call(alert, ERROR_MSG);
  }
}

function* watcher() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([takeLatest(GET_STUDENT, getEstudiantes)]);
  } catch (err) {
    throw err;
  }
}

export default [fork(watcher)];
