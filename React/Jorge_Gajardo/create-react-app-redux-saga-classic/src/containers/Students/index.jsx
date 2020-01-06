import React from 'react';

import { getStudents } from '../../actions/students';
import { useActions } from '../../hooks';

const Students = () => {
  const { onGetStudents } = useActions({
    onGetStudents: getStudents
  });

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={() => onGetStudents()}>Press me</button>
    </div>
  );
};

export default Students;
