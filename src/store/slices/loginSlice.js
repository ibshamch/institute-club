import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    handleEmailInput(state, action) {
      state.email = action.payload;
    },
    handlePasswordInput(state, action) {
      state.password = action.payload;
    },
  },
});

export const { handleEmailInput, handlePasswordInput } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
