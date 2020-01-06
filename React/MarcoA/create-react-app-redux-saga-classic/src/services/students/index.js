import buildApi from '../api';

import { URLS } from './config';

const createApi = () => {
  const { setBaseURL, get } = buildApi();

  setBaseURL('http://localhost:3001/lagash/mostrar/');
  const conseguirRut = {
    getRut: (config = {}) => get(`${URLS.conseguirRut.getRut}`, {}, config)
  };

  return { conseguirRut };
};

export default createApi;
