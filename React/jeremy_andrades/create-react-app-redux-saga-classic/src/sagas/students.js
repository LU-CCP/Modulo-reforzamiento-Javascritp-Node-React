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

    if (!ok) {
      yield call(alert, ERROR_MSG);

      return;
    }

    // yield putResolve(setStudent(data));
    // console.log('save', data);
  } catch (err) {
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
