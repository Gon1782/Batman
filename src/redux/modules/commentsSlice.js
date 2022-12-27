import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  edit: { id: 0, onEdit: false },
  like: { id: 0, isLiked: false },
  dislike: { id: 0, isDisLiked: false },
};

const comments = createSlice({
  name: "comments",
  initialState,
  reducers: {
    showEditBtn: (state, action) => {
      state.edit.onEdit = true;
      state.edit.id = action.payload;
    },
    hideEditBtn: (state) => {
      state.edit.onEdit = false;
      state.edit.id = 0;
    },
    clickLike: (state, action) => {
      state.like.isLiked = true;
      state.like.id = action.payload;
    },
    clickDislike: (state, action) => {
      state.dislike.isDisLiked = true;
      state.dislike.id = action.payload;
    },
  },
});

export const { showEditBtn, hideEditBtn, clickLike, clickDislike } = comments.actions;
export default comments.reducer;
