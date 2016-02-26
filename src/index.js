import './index.html';

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { thunkMiddleware } from 'redux-thunk';
import { Provider } from 'react-redux';

import reducer from './reducer';
import App from './App.jsx';

const store = applyMiddleware(thunkMiddleware, createLogger)(reducer)(createStore);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
