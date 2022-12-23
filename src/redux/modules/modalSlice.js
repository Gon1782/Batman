import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  edit: "",
  modalId: 0,
};

const modal = createSlice({
  name: "todos",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.show = true;
      state.edit = action.payload[1];
      state.modalId = action.payload[0];
    },
    hideModal: (state) => {
      state.show = false;
      state.edit = "";
      state.modalId = 0;
    },
  },
});

export const { showModal, hideModal } = modal.actions;
export default modal.reducer;
