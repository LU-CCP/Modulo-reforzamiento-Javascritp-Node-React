import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    getStudents: null
  },
  {
    prefix: 'STUDENTS/'
  }
);

const { getStudents } = Creators;

const { GET_STUDENTS } = Types;

export { Types, getStudents, GET_STUDENTS };

export default Creators;
