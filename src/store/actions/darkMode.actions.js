import { toggleDarkMode } from "../reducers/darkMode.reducer";
import { store } from "..";

export const toggleDarkModeAction = (payload) => {
  store.dispatch(toggleDarkMode(payload));
};
