import React from 'react';

import { fetchStudent } from '../../actions/student';
import { useActions } from '../../hooks';

import styles from './styles';

const Student = () => {
  const { onFetchStudent, onSaveStudent } = useActions({
    onFetchStudent: fetchStudent
  });

  return (
    <div style={styles.container}>
      <h1>Hello from Student</h1>
      <button onClick={() => onFetchStudent()}>
        <b>Press me</b>
      </button>
    </div>
  );
};

export default Student;
