import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    fetchStudents: null,
    setStatus: ['key', 'value']
  },
  {
    prefix: 'STUDENTS/'
  }
);

const { fetchStudents, setStatus } = Creators;

const { FETCH_STUDENTS, SET_STATUS } = Types;

export { Types, fetchStudents, FETCH_STUDENTS, setStatus, SET_STATUS };
export default Creators;
