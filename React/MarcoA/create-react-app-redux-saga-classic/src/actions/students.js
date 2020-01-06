import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    fetchText: null
  },
  {
    prefix: 'EXAMPLE/'
  }
);

const { fetchText } = Creators;

const { FETCH_TEXT } = Types;

export { Types, fetchText, FETCH_TEXT };

export default Creators;
