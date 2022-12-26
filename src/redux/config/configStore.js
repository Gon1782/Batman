import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import modal from "../modules/modalSlice";
import dropdown from "../modules/dropdownSlice";
import comments from "../modules/commentsSlice";
import bet from "../modules/betSlice";
import community from "../modules/community";

const rootReducer = combineReducers({
  community,
  modal,
  dropdown,
  comments,
  bet,
});

const store = configureStore({ reducer: rootReducer });

export default store;
