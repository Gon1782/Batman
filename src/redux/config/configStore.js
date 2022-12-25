import { configureStore } from "@reduxjs/toolkit";
import modal from "../modules/modalSlice";
import dropdown from "../modules/dropdownSlice";
import comments from "../modules/commentsSlice";
import bet from "../modules/betSlice";

const store = configureStore({
  reducer: { modal, dropdown, comments, bet },
});

export default store;
