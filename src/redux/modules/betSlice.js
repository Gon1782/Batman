import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    isBet: false,
  },
  {
    id: 2,
    isBet: false,
  },
  {
    id: 3,
    isBet: false,
  },
];

const bet = createSlice({
  name: "bet",
  initialState,
  reducers: {
    betOn: (state, action) => {
      state[action.payload - 1].isBet = true;
    },
    betOff: (state, action) => {
      state[action.payload - 1].isBet = false;
    },
  },
});

export const { betOn, betOff } = bet.actions;
export default bet.reducer;
