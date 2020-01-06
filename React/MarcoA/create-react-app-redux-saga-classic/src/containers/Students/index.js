import React from 'react';
import { useSelector } from 'react-redux';

import { makeGetData } from '../../selectors/student';

const Student = () => {
  const {
    data: { students }
  } = useSelector(
    createStructuredSelector({
      data: makeGetData()
    })
  );

  return (
    <div>
      <h1>Hola</h1>
      <button>Obtener Estudiantes</button>
    </div>
  );
};

export default Student;
