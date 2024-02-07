// rootReducer.js

import { combineReducers } from '@reduxjs/toolkit';
import dragonsReducer from './slices/dragonsSlice.js';

const rootReducer = combineReducers({
  dragons: dragonsReducer,

});

export default rootReducer;
