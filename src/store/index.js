// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./reducers/darkMode.reducer";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});
