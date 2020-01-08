import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetcStudent, saveStudent } from '../../actions/Students';
import { makeGetData } from '../../selectors/students';
import { useActions } from '../../hooks';

const Students = () => {
  const {
    data: { students }
  } = useSelector(
    createStructuredSelector({
      data: makeGetData()
    })
  );

  const { onFetchStudent, onSaveStudent } = useActions({
    onFetchStudent: fetcStudent,
    onSaveStudent: saveStudent
  });

  return (
    <div>
      {' '}
      <button>Ver estudiantes</button>
    </div>
  );
};

export default Students;
