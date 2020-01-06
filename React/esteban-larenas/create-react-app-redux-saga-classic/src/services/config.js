const TIMEOUTS = {
  GLOBAL: 20e3
};

const config = {
  baseURL: null,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization:
      'Beaner eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVzdGViYW4iLCJwYXNzd29yZCI6IjEyMzQiLCJpYXQiOjE1NzgwODI3NjMsImV4cCI6MTU3ODA5Mjc2M30.i9PauxglYM7p-Fb_X1aeOd9EIZ7pmzH6K6aj310gvv8'
  },
  timeout: TIMEOUTS.GLOBAL
};

export { TIMEOUTS };

export default config;
