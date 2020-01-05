const TIMEOUTS = {
  GLOBAL: 20e3
};

const config = {
  baseURL: null,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hdGhpYXMiLCJwYXNzd29yZCI6Im1vbGluYSIsImlhdCI6MTU3ODA4NjkzMSwiZXhwIjoxNTg3MDg2OTMxfQ.yW4eKYZAicv1BLoa1UX4DwP96Ci81MMlfxwNuwBdNdI'
  },
  timeout: TIMEOUTS.GLOBAL
};

export { TIMEOUTS };

export default config;
