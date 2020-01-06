import { all, fork, takeLatest } from 'redux-saga/effects';

import { setStudent, SAVE_STUDENT, FETCH_STUDENT } from '../actions/example';
import { studentApi } from '../services';
import { MESSAGES } from '../config/messages';

const { ERROR_MSG } = MESSAGES;
const { getStudent } = studentApi;

function* fetchStudent() {
  try {
    const { ok, data } = yield call(getStudent);

    if (!ok) {
      yield call(alert, ERROR_MSG);

      return;
      console.log('data result', dataResult);
      console.log('save', data);
    }
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

export default [fork(watcher)];
