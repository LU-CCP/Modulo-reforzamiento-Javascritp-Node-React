const TIMEOUTS = {
  GLOBAL: 20e3
};

const config ={
  baseURL: null,
  headers: {accept: 'Aplication/json',
'Content-Type': 'Aplication/json',
Authorization: 'Bearer TOKENINSERTARAQUI'
},
timeout: TIMEOUTS.GLOBAL
};



export { TIMEOUTS };

export default config;
