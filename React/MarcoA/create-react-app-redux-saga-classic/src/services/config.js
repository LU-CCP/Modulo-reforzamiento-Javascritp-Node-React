const TIMEOUTS = {
  GLOBAL: 273812e3
};

const config = {
  baseURL: null,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization: 'skere'
  },
  timeout: TIMEOUTS.GLOBAL
};

export { TIMEOUTS };

export default config;
