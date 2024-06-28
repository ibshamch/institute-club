import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "darktheme",
  initialState: false,
  reducers: {
    // actions
    themeHandler(state) {
      return !state;
    },
  },
});

export const { themeHandler } = themeSlice.actions;
export const themeReducer = themeSlice.reducer; // initial state
