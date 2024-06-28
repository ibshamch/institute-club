import { configureStore } from "@reduxjs/toolkit";
import { themeHandler, themeReducer } from "./slices/themeSlice";
import { modalActive, modalReducer, modalDisable } from "./slices/modalSlice";
import {
  loginReducer,
  handleEmailInput,
  handlePasswordInput,
} from "./slices/loginSlice";
import {
  handleUserTypeInput,
  handleFormReset,
  handleSignUpEmailInput,
  handleSignUpFirstNameInput,
  handleSignUpLastNameInput,
  handleSignUpPassword,
  registerFormReducer,
} from "./slices/registerFormSlice";
import { pricingReducer, checkPlanTypeData } from "./slices/pricingSlice";
import { userReducer } from "./slices/userSlice";
const store = configureStore({
  // use-selector ki state ye hai
  reducer: {
    theme: themeReducer,
    modal: modalReducer,
    login: loginReducer,
    register: registerFormReducer,
    plans: pricingReducer,
    user: userReducer,
  },
});

export * from "./thunks/fetchPricePlans";
export * from "./thunks/fetchUserData";

export {
  store,
  themeHandler,
  modalActive,
  modalDisable,
  handleEmailInput,
  handleFormReset,
  handlePasswordInput,
  handleUserTypeInput,
  handleSignUpEmailInput,
  handleSignUpFirstNameInput,
  handleSignUpLastNameInput,
  handleSignUpPassword,
  checkPlanTypeData,
};
