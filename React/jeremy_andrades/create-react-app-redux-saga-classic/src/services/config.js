const TIMEOUTS = {
  GLOBAL: 20e3
};

const config = {
  baseURL: null,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImplcmVteSIsInBhc3N3b3JkIjoiZG9ud2VhMTIzNCIsImlhdCI6MTU3ODA4NzM1OCwiZXhwIjoxNTc5MDg3MzU4fQ.JOtuKW3yiDZfZT2uvZ--Jgq2VhZoXMeZAsw36JQzZZg'
  },
  timeout: TIMEOUTS.GLOBAL
};

export { TIMEOUTS };

export default config;
