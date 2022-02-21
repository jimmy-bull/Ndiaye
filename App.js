import * as React from 'react';
import allMyreducers from './Reducers';
import { Provider } from 'react-redux';
import DefineHome from './components/defineHome';
import { createStore } from 'redux';
//
const store = createStore(allMyreducers)
export default function App() {
  return (
    <Provider store={store}>
      <DefineHome />
    </Provider>
  );
}

