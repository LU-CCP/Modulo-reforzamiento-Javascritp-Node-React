import { createActions } from 'reduxsauce';
const { Types, Creators } = createActions(
  {
    getStudent: null
  },
  {
    prefix: 'GETSTUDENT/'
  }
);

const { getStudent } = Creators;

const { GET_STUDENT } = Types;

export { Types, getStudent, GET_STUDENT };

export default Creators;
