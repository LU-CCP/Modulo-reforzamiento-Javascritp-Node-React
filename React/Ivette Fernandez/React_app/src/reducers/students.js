import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { SET_STATUS } from '../actions/students';

const INITIAL_STATE = {
  data: {
    text: ''
  },
  status: {
    fetching: false
  }
};

const setStatus = produce(({ status }, { key, value }) => {
  status[key] = value;
});

const reducer = createReducer(INITIAL_STATE, {
  [SET_STATUS]: setStatus
});

export default reducer;
