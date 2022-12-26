import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  edit: { id: 0, onEdit: false },
};

const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {
    showEdit: (state, action) => {
      state.edit.onEdit = true;
      state.edit.id = action.payload;
    },
    hideEdit: (state) => {
      state.edit.onEdit = false;
      state.edit.id = 0;
    },
  },
});

export const { showEdit, hideEdit } = communitySlice.actions;
export default communitySlice.reducer;
