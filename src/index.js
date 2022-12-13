import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {persistor} from './redux/Store';
import {Provider} from 'react-redux';
import {store} from './redux/Store';
import {PersistGate} from 'redux-persist/integration/react';

ReactDOM.render (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById ('root')
);