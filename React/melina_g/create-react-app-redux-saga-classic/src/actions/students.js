import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    fetchStudents: null
  },
  {
    prefix: 'STUDENTS/'
  }
);

const { fetchStudents } = Creators;

const { FETCH_STUDENTS } = Types;

export { Types, fetchStudents, FETCH_STUDENTS };

export default Creators;
