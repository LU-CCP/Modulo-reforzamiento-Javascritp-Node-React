import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    getStudents: null,
    setStatus: ['key', 'value']
  },
  {
    prefix: 'STUDENTS/'
  }
);

const { getStudents, setStatus } = Creators;

const { GET_STUDENTS, SET_STATUS } = Types;

export { Types, getStudents, setStatus, GET_STUDENTS, SET_STATUS };

export default Creators;
