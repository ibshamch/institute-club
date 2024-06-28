import { createSlice } from "@reduxjs/toolkit";
import { fetchPricePlans } from "../thunks/fetchPricePlans";

const pricingSlice = createSlice({
  name: "pricing",
  initialState: {
    planType: [],
    plansArr: [],
    plan: {},
  },
  reducers: {
    checkPlanTypeData(state, action) {
      const data = state.plansArr.find((data) => {
        return data.type.toLowerCase() === action.payload.toLowerCase();
      });
      state.plan = { ...state.plan, ...data };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPricePlans.fulfilled, (state, action) => {
      const { planTypeData, plansArrData } = action.payload;
      state.planType = [...planTypeData];
      state.plansArr = [...plansArrData];
    });
  },
});

export const { checkPlanTypeData } = pricingSlice.actions;
export const pricingReducer = pricingSlice.reducer;
