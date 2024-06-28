import { createSlice } from "@reduxjs/toolkit";

const registerFormSlice = createSlice({
  name: "register",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "",
  },
  reducers: {
    handleSignUpFirstNameInput(state, action) {
      state.firstName = action.payload;
    },
    handleSignUpLastNameInput(state, action) {
      state.lastName = action.payload;
    },
    handleSignUpEmailInput(state, action) {
      state.email = action.payload;
    },
    handleSignUpPassword(state, action) {
      state.password = action.payload;
    },
    handleUserTypeInput(state, action) {
      state.userType = action.payload;
    },
    handleFormReset(state) {
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.password = "";
      state.userType = "";
    },
  },
});

export const {
  handleFormReset,
  handleUserTypeInput,
  handleSignUpEmailInput,
  handleSignUpFirstNameInput,
  handleSignUpLastNameInput,
  handleSignUpPassword,
} = registerFormSlice.actions;

export const registerFormReducer = registerFormSlice.reducer;
