import { v4 as uuidv4 } from "uuid";

const ADD_COMMUNITY = "ADD_COMMUNITY";

export const addCommunity = (payload) => {
  return {
    type: ADD_COMMUNITY,
    payload,
  };
};

const initialState = [];

const community = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMUNITY:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default community;
