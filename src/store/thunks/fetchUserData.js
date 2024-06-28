import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk(
  "userData/fetch",
  async (idReceived) => {
    const { data } = await axios.get("http://localhost:5000/users");
    const userData = data.find(
      (user) => String(user.id) === String(idReceived)
    );
    return userData;
  }
);
