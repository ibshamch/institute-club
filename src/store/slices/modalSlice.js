import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    modalActive(state) {
      state.isOpen = true;
    },
    modalDisable(state) {
      state.isOpen = false;
    },
  },
});

export const { modalActive, modalDisable } = modalSlice.actions;
export const modalReducer = modalSlice.reducer; // initial state
