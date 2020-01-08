import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchStudents } from '../../actions/students';
import { makeGetData } from '../../selectors/example';
import { useActions } from '../../hooks';

const Students = () => {
  const texto = 'Texto';
  const buttonText = 'Press me';
  const {
    data: { students }
  } = useSelector(createStructuredSelector({ data: makeGetData }));
  const { onFetchStudents } = useActions({
    onFetchStudents: fetchStudents
  });

  return (
    <div>
      <p>{texto}</p>
      <button onClick={() => onFetchStudents()}>{buttonText}</button>
    </div>
  );
};

export default Students;
