import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./slices/basketReducer";
const preloadedState = localStorage.getItem("redux")
  ? JSON.parse(localStorage.getItem("redux"))
  : {};

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  localStorage.setItem("redux", JSON.stringify(store.getState()));
});
