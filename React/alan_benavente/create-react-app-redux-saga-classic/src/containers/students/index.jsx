import React from 'react';
import {fethStudent,saveStudent} from '../../actions/students';
import {makeGetData} from '../../selectors/students';
import {useActions} from '../../hooks';
import './css.css';
import styles from './styles';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const Students = () => {
  const {data:{students}= useSelector(createStructuredSelector({data:makeGetData()
  })
  )}
  const { onFetchStudent,onSaveStudent}= useActions({
    onFetchStudent: fethStudent,
    onSaveStudents:saveStudent
  })
  return (
  <div>
    <h1>Student component </h1>
    <button onClick={()=> onFetchStudent()} id="getStudent">Obtener Estudiantes</button>
  </div>);
};

export default Students;
