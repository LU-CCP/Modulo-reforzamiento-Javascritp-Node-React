import buildApi from '../api';

import { URLS } from './config';

const { URL_API } = process.env;

const createApi = () => {
  const { setBaseURL, get } = buildApi();

  setBaseURL(URL_API);

  const todos = {
    getTodo: (id, config = {}) => get(`${URLS.todos.getTodo}${id}`, {}, config)
  };

  return { todos };
};

export default createApi;
