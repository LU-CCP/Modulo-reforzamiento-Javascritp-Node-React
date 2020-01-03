import React from 'react';

import { fetchStudent, saveStudent } from '../../actions/student';
import { useActions } from '../../hooks';

const Student = () => {
  const { onFetchStudent, onSaveStudent } = useActions({
    onFetchStudent: fetchStudent
  });

  return (
    <div>
      <h1>Student component</h1>
      <button onClick={() => onFetchStudent()}>Pres me</button>
    </div>
  );
};

export default Student;
