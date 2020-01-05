import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { GET_STUDENTS } from '../actions/students';

const INITIAL_STATE = {
  data: {
    text: ''
  },
  status: {
    fetching: false
  }
};

const setText = produce(({ data }, { value }) => {
  data.text = value;
});

// const setStatus = produce(({ status }, { key, value }) => {
//   status[key] = value;
// });

const reducer = createReducer(INITIAL_STATE, {
  [GET_STUDENTS]: setText
});

export default reducer;
