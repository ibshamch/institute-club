import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "../thunks/fetchUserData";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const userReducer = userSlice.reducer;
