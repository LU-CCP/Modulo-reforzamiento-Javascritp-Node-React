import { all, call, fork, takeLatest } from 'redux-saga/effects';

import { GET_STUDENTS } from '../actions/students';
import { exampleApi } from '../services';
import { MESSAGES } from '../config/messages';

const { ERROR_MSG } = MESSAGES;
const {
  todos: { getTodo }
} = exampleApi;

function* FetchStudents() {
  try {
    const { ok } = yield call(getTodo);

    if (!ok) {
      yield call(alert, ERROR_MSG);

      return;
      // yield putResolve(setStatus(data));
    }
  } catch (err) {
    yield call(alert, ERROR_MSG);
    // console.log(err);
  }
}

function* watcher() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([takeLatest(GET_STUDENTS, FetchStudents)]);
  } catch (err) {
    throw err;
  }
}

export default [fork(watcher)];
