import buildApi from '../api';

import { URLS } from './config';

const createApi = () => {
  const { setBaseURL, get } = buildApi();

  setBaseURL('http://localhost:3010');

  const todos = {
    getTodo: (config = {}) => get(`${URLS.todos.getTodo}`, {}, config)
  };

  return { todos };
};

export default createApi;
