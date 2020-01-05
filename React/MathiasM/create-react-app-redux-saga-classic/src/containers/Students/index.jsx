/* eslint-disable react/jsx-no-literals */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
import React from 'react';

import { getStudents } from '../../actions/students';
import { useActions } from '../../hooks';

const Students = () => {
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
