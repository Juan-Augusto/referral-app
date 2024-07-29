// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./reducers/darkMode.reducer";
import referralsReducer from "./reducers/referrals.reducer";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    referrals: referralsReducer,
  },
});
