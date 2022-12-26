import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  show: false,
};

const dropdown = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    showDropdown: (state, action) => {
      state.show = true;
      state.id = action.payload;
    },
    hideDropdown: (state) => {
      state.show = false;
      state.id = 0;
    },
  },
});

export const { showDropdown, hideDropdown } = dropdown.actions;
export default dropdown.reducer;
