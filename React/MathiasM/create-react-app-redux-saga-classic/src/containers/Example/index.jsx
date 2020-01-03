import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import logo from '../../resources/svg/logo.svg';
import { fetchText } from '../../actions/example';
import { makeGetData, makeGetStatus } from '../../selectors/example';
import { useActions } from '../../hooks';
import { Example as ExampleComponent } from '../../components';

import './css.css';
import styles from './styles';

const Example = () => {
  const {
    data: { text },
    status: { fetching }
  } = useSelector(
    createStructuredSelector({
      data: makeGetData(),
      status: makeGetStatus()
    })
  );
  const { onFetchText } = useActions({
    onFetchText: fetchText
  });

  return (
    <div style={styles.container}>
      <img style={styles.logo} src={logo} alt='logo' />
      <ExampleComponent {...{ text, fetching, onFetchText }} />
    </div>
  );
};

export default Example;
