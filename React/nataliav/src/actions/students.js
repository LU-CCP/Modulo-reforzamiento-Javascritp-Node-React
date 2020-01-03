import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    setStudent: null,
    fetchStudent: null,
    saveStudent: null
  },
  {
    prefix: 'STUDENTS/'
  }
);

const { fetchStudent, saveStudent, setStudent } = Creators;
const { SET_STUDENT, FETCH_STUDENT, SAVE_STUDENT } = Types;

export {
  setStudent,
  fetchStudent,
  saveStudent,
  FETCH_STUDENT,
  SAVE_STUDENT,
  SET_STUDENT
};
