import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import modal from "../modules/modalSlice";
import dropdown from "../modules/dropdownSlice";
import comments from "../modules/commentsSlice";
import bet from "../modules/betSlice";
import community from "../modules/community";
import communitySlice from "../modules/communitySlice";

const rootReducer = combineReducers({
  community,
  modal,
  dropdown,
  comments,
  bet,
  communitySlice,
});

const store = configureStore({ reducer: rootReducer });

export default store;
