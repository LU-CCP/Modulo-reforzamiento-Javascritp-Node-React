import buildApi from '../api';

import { URLS } from './config';

const createApi = () => {
  const { setBaseURL, get } = buildApi();

  setBaseURL('http://localhost:8085/v1/students');

  const todos = {
    getTodo: (id, config = {}) => get(`${URLS.todos.getTodo}${id}`, {}, config)
  };

  return { todos };
};

export default createApi;
