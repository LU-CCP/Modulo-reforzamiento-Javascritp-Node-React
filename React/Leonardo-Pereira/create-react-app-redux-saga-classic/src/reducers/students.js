import { createReducer } from 'reduxsauce';
import produce from 'immer';

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

const setStatus = produce(({ status }, { key, value }) => {
  status[key] = value;
});

const reducer = createReducer(INITIAL_STATE, {
  [SET_TEXT]: setText,
  [SET_STATUS]: setStatus
});

export default reducer;
