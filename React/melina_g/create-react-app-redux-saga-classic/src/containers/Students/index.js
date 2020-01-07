import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeGetData } from '../../selectors/example';
import { useActions } from '../../hooks';
import { fetchStudents } from '../../actions/students';

const Student = () => {
  const {
    data: { students }
  } = useSelector(
    createStructuredSelector({
      data: makeGetData()
    })
  );
  const { onFetchStudents } = useActions({
    onFetchStudents: fetchStudents
  });

  return (
    <div>
      <h1>Student component</h1>
      <button onClick={() => onFetchStudents()}>Press me </button> />
    </div>
  );
};

export default Student;
