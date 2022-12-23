import { combineReducers, createStore } from "redux";
import community from "../modules/community";

const rootReducer = combineReducers({
  community,
});

const store = createStore(rootReducer);

export default store;
