import buildApi from '../api';

import { URLS } from './config';

// const { REACT_APP_URL_EXAMPLE_API } = process.env;

const createApi = () => {
  const { setBaseURL, get } = buildApi();

  setBaseURL('http://localhost:7080/v1/');

  const todos = {
    getTodo: (config = {}) => get(`${URLS.todos.getTodo}`, {}, config)
  };

  return { todos };
};

export default createApi;
