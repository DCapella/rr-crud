import React from "react";
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { store } from './store/index.js';
import { Container } from "./containers/connect.js";



render(
  (
    <Provider store={store}>
      <Container />
    </Provider>
  ),
  document.getElementById('root')
);
