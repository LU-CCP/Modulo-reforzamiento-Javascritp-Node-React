/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-literals */
import React from 'react';
// import { useSelector } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import { makeGetData } from '../../selectors/students';
import { useActions } from '../../hooks';
import { getStudents } from '../../actions/students';

const Students = () => {
  // const {
  //   data: { students }
  // } = useSelector(createStructuredSelector({ data: makeGetData() }));
  const { onFetchStudent } = useActions({
    onFetchStudent: getStudents
  });

  return (
    <div>
      <h1>Student Component</h1>
      <button onClick={() => onFetchStudent()}>Get Students</button>
      <button>Create Students</button>
      <button>Update Students</button>
      <button>Delete Students</button>
    </div>
  );
};

export default Students;
