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
    handleLoginFormReset(state) {
      state.email = "";
      state.password = "";
    },
  },
});

export const { handleEmailInput, handlePasswordInput, handleLoginFormReset } =
  loginSlice.actions;
export const loginReducer = loginSlice.reducer;
