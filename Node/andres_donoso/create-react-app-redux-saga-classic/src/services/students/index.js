import { buildApi } from '../api';

import { URLS } from './config';

const createApi = () => {
  const { setBaseUrl, get } = buildApi();

  setBaseUrl('http://localhost:8080/v1');

  const todos = {
    getTodo: (config = {}) => get(`${URLS.todos.getTodo}`, {}, config)
  };

  return { todos };
};

export default createApi;
