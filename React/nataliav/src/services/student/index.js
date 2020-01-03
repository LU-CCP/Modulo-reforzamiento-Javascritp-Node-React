import buildApi from '../api';

import { URLS } from './config';

const createApi = () => {
  const { setBaseURL, get } = buildApi();

  setBaseURL('http://localhost:8080/v1/');

  const todos = {
    getTodo: (id, config = {}) => get(`${URLS.todos.getTodo}${id}`, {}, config)
  };

  return { todos };
};

export default createApi;
