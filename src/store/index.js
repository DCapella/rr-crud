import { createStore } from 'redux';
import { messageReducer } from '../reducers/index.js';

export const store = createStore(messageReducer);
