import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import example from './example';

function createRootReducer(history) {
  const router = connectRouter(history);
  const rootReducer = combineReducers({ example, router });

  return rootReducer;
}

export default createRootReducer;
