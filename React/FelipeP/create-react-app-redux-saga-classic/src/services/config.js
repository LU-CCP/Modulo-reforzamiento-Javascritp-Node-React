const TIMEOUTS = {
  GLOBAL: 20e3
};

const config = {
  baseURL: null,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZmVsaXBlcCIsInBhc3MiOjEyMzQsImlhdCI6MTU3ODA4NzI4MSwiZXhwIjoxNTc4MDk0NDgxfQ.tprQLCp_RufZbfUr32zjOESlbYU4EWtoqKPPpVlXf7o'
  },
  timeout: TIMEOUTS.GLOBAL
};

export { TIMEOUTS };

export default config;
