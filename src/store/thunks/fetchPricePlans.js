import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchPricePlans = createAsyncThunk("pricingPlans/fetch", async () => {
  const req = await axios.get("http://localhost:5000/pricingAndPlans");
  return req.data;
});

export { fetchPricePlans };
