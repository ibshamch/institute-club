import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUserData = createAsyncThunk("userData/fetch", async (id) => {
  const { data } = await axios.get("http://localhost:5000/users");
  const userData = data.find((account) => {
    return account.id === id;
  });
  return userData;
});

export { fetchUserData };
