import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    getStudents: null,
    postStudents: ['body'],
    delStudents: ['body'],
    putStudents: ['body']
  },
  {
    prefix: 'STUDENT/'
  }
);

const { getStudents, postStudents, delStudents, putStudents } = Creators;

const { GET_STUDENTS, POST_STUDENTS, DEL_STUDENTS, PUT_STUDENTS } = Types;

export {
  Types,
  getStudents,
  postStudents,
  delStudents,
  putStudents,
  GET_STUDENTS,
  POST_STUDENTS,
  DEL_STUDENTS,
  PUT_STUDENTS
};

export default Creators;
