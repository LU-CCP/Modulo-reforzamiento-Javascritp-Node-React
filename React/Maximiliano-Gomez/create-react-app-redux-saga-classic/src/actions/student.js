import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    fetchStudent: null
  },
  {
    prefix: 'STUDENT/'
  }
);

const { fetchStudent } = Creators;

const { FETCH_STUDENT } = Types;

export { Types, fetchStudent, FETCH_STUDENT };

export default Creators;
