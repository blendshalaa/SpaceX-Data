import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rocketSlice from "./slices/rocketSlice";
import missionsSlice from "./slices/missionsSlice";
import dragonsSlice from "./slices/dragonsSlice";

const store = configureStore({
  reducer: {
    rockets: rocketSlice,
    missions: missionsSlice,
    dragons:dragonsSlice

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});

export default store;
