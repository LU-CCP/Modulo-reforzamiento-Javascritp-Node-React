import {
  all,
  call,
  delay,
  fork,
  put,
  putResolve,
  takeLatest
} from 'redux-saga/effects';

import { setText, setStatus, FETCH_TEXT } from '../actions/example';
import { studentApi } from '../services';
import { MESSAGES } from '../config/messages';

const { ERROR_MSG } = MESSAGES;
const { todos: todosApi } = studentApi;

function* fetchText() {
  try {
    yield putResolve(setStatus('fetching', true));
    yield delay(1e3);

    const id = Math.floor(Math.random() * 100 + 1);
    const {
      ok,
      data: { title }
    } = yield call(todosApi.getTodo, id);

    if (ok && typeof title === 'string') {
      yield putResolve(setText(title));
    }
  } catch (err) {
    yield call(alert, ERROR_MSG);
  } finally {
    yield put(setStatus('fetching', false));
  }
}

function* watcher() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([takeLatest(FETCH_TEXT, fetchText)]);
  } catch (err) {
    throw err;
  }
}

export default [fork(watcher)];
