import React from 'react';
import Navigators from './src/navigators';
import Store from './src/store';
import {Provider} from 'react-redux';

export default () => (
  <Provider store={Store}>
    <Navigators />
  </Provider>
);
