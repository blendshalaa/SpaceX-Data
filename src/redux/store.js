import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import missionsReducer from '../redux/missions/missionSlice';
import rocketSlice from "./slices/rocketSlice";
// import dragonsSlice from './dragons/dragonsSlice';

// dragons: dragonsSlice
// missions: missionsReducer,
const store = configureStore({
  reducer: {
    rockets: rocketSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
