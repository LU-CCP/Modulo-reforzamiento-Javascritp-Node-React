const TIMEOUTS = {
  GLOBAL: 20e3
};

const config = {
  baseURL: null,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiTWVsaW5hX2ciLCJwYXNzd29yZCI6ImFuZGlwb3BvIiwiaWF0IjoxNTc4MDg1OTUwLCJleHAiOjE1NzgxNzIzNTB9.eCJG3Bc6nHevWdJOYVRR-BiIBdyXJysY-LBWzkIRD7k'
  },
  timeout: TIMEOUTS.GLOBAL
};

export { TIMEOUTS };

export default config;
