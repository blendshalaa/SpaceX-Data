import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rocketSlice from "./slices/rocketSlice";
import missionsSlice from "./slices/missionsSlice";

const store = configureStore({
  reducer: {
    rockets: rocketSlice,
    missions: missionsSlice,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});

export default store;
