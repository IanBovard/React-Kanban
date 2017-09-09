import './containers/App/styles.css';
import React from 'react';
import { render } from 'react-dom';
import App from './containers/App/index';
import { Provider } from 'react-redux';
import taskReducers from './reducers';
import ReduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

let store = createStore(
  taskReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxThunk)
  );

render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
  );
