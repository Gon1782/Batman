import { configureStore } from "@reduxjs/toolkit";
import modal from "../modules/modalSlice";

const store = configureStore({
  reducer: { modal },
});

export default store;
