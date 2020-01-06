import React from 'react';

import { getStudents } from '../../actions/students';
import { useActions } from '../../hooks';
// import { useSelector } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

const Students = () => {
  // const {
  //   data: {students}
  // } = useSelector(
  //   createStructuredSelector({
  //     data: makeGetData()
  //   })
  // );
  const { onGetStudent } = useActions({
    onGetStudent: getStudents
  });

  return (
    <div>
      <h2>Students</h2>
      <button onClick={() => onGetStudent()}>Press me</button>
    </div>
  );
};

export default Students;
