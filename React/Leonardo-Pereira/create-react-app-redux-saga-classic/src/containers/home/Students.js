import React from 'react';
import { Typography, Grid, Card, Button } from '@material-ui/core';
import { getStudent } from '../../actions/students';
import { useActions } from '../../hooks';
import { useSelector, createSelectorHook } from 'react-redux';

const Students = () => {
  /* const {
    data: { students }
  } = useSelector(
    createSelectorHook({
      //data: makeGetData()
    })
  ); */

  const { onFetchStudent } = useActions({
    onFetchStudent: getStudent
  });

  return (
    <div>
      <Grid
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <Card
          style={{
            height: '300px',
            width: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '40px'
          }}
        >
          <Typography variant='h2'>Estudiantes!</Typography>
        </Card>
        <Button
          style={{ marginTop: '20px' }}
          variant='contained'
          color='primary'
          onClick={() => onFetchStudent()}
        >
          Obtener Students
        </Button>
      </Grid>
    </div>
  );
};

export default Students;
