// store.js
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketSlice from './slices/rocketsSlice';
import dragonsReducer from './slices/dragonsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketSlice,
    dragons: dragonsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
