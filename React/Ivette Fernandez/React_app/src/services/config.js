const TIMEOUTS = {
  GLOBAL: 20e3
};

const config = {
  baseURL: null,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikl2ZXR0ZSIsImlhdCI6MTU3ODA4MjY2NywiZXhwIjoxNTc4MDg5ODY3fQ.-bbyGZcaRcjBEXZwLogFRZlybDLv4b1HvePP_2pQbPw'
  },
  timeout: TIMEOUTS.GLOBAL
};

export { TIMEOUTS };

export default config;
