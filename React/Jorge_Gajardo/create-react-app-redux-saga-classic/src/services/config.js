const TIMEOUTS = {
  GLOBAL: 20e3
};

const config = {
  baseURL: null,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvcmdlIiwicGFzc3dvcmQiOiJwYXNzMTIzNDUiLCJpYXQiOjE1NzgwODg3MjUsImV4cCI6MTU4MDA4ODcyNX0.Q1LE45w05zKmI-oswZfNJHqhJ8SeCcnDFxucP8iqubM'
  },
  timeout: TIMEOUTS.GLOBAL
};

export { TIMEOUTS };

export default config;
