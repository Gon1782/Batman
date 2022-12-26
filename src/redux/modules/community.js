import { v4 as uuidv4 } from "uuid";
// 1. action items.
const ADD_COMMUNITY = "ADD_COMMUNITY";
const REMOVE_COMMUNITY = "REMOVE_COMMUNITY";
const MODIFIED_COMMUNITY = "MODIFIED_COMMUNITY";

// 2. action creators(1)
export const addCommunity = (payload) => {
  return {
    type: ADD_COMMUNITY,
    payload,
  };
};

// 2. action creators(2)
export const removeCommunity = (payload) => {
  return {
    type: REMOVE_COMMUNITY,
    payload,
  };
};

export const modifiedCommunity = (payload) => {
  return {
    type: MODIFIED_COMMUNITY,
    payload,
  };
};

// 3. initial State => reducer를 구성했을 때
const initialState = [
  {
    id: uuidv4(),
    title: "맨시티 vs 맨유 누가 진정한 맨체스터 주인인가",
    contents: "맨시티 승",
  },
];

const community = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMUNITY:
      return [...state, action.payload];
    case REMOVE_COMMUNITY:
      return state.filter((item) => item.id !== action.payload);
    case MODIFIED_COMMUNITY:
      return state.map((item) => {
        if (item.id === action.payload.payload) {
          return {
            ...item,
          };
        }
      });
    default:
      return state;
  }
};

export default community;
