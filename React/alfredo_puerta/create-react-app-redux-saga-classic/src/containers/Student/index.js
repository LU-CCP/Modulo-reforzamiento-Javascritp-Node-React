import React from 'react';

import { useActions } from '../../hooks';
import { fetchStudent } from '../../actions/student';

const Student = () => {
  const titulo = 'Hola Student';
  const searchStudent = 'searchStudent';

  //   const {
  //     data: { student }
  //   } = useSelector(
  //     createStructuredSelector({
  //       data: makeGetData()
  //     })
  //   );

  const { onFetchStudent } = useActions({
    onFetchStudent: fetchStudent
  });

  return (
    <div>
      <h1>{titulo}</h1>
      <button onClick={() => onFetchStudent()}>{searchStudent}</button>
    </div>
  );
};

export default Student;
