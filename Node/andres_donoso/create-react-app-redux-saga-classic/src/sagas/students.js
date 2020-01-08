import {
  all,
  call,
  delay,
  fork,
  put,
  putResolve,
  takeLatest
} from 'redux-saga/effects';

import { setStudent, setStatus, FETCH_STUDENT } from '../actions/Students';
import { studentApi } from '../services';
import { MESSAGES } from '../config/messages';

import example from './example';

const { ERROR_MSG } = MESSAGES;
const { todos: getStudents, postStudents } = studentApi;

function* fetchStudent() {
  try {
    yield putResolve(setStatus('fetching', true));
    yield delay(1e3);

    const id = Math.floor(Math.random() * 100 + 1);
    const { ok, data } = yield call(todosApi.getTodo, id);

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
    yield all([takeLatest(SAVE_STUDENT, saveStudent)]);
  } catch (err) {
    throw err;
  }
}

function* root() {
  try {
    yield all([...example, ...student]);
  } catch (err) {
    throw err;
  }
}

export default [fork(watcher)];
