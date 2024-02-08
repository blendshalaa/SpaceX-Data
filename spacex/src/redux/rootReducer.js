// rootReducer.js

import { combineReducers } from '@reduxjs/toolkit';
import dragonsReducer from './reducers/dragonsSlice';

const rootReducer = combineReducers({
  dragons: dragonsReducer,

});

export default rootReducer;
