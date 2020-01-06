import buildApi from '../api';

import { URLS } from './config';

// const { REACT_APP_URL_EXAMPLE_API } = process.env;

const createApi = () => {
  const { setBaseURL, get } = buildApi();
  const urlBase = 'http://localhost:8080/v1/';

  setBaseURL(urlBase);

  const todos = {
    getTodo: (id, config = {}) =>
      get(`${URLS.students.getStudents}`, {}, config)
  };

  return { todos };
};

export default createApi;
