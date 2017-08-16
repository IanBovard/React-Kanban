import './containers/App/styles.css';
import React from 'react';
import { render } from 'react-dom';
import App from './containers/App/index.js';
/*import { Provider } from 'react-redux';*/

/*import todoReducers from './reducers';*/
/*import { createStore } from 'redux';
let store = createStore(todoReducers);*/

render(
/*  <Provider store={store}>*/
  <div>
  <App />
  </div>,
/*  </Provider>,*/
  document.getElementById('root')
  );
