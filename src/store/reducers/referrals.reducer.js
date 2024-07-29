import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  referrals: [],
};

const referralsSlice = createSlice({
  name: "referrals",
  initialState,
  reducers: {
    setReferrals: (state, action) => {
      state.referrals = action.payload;
    },
  },
});

export const { setReferrals } = referralsSlice.actions;

export default referralsSlice.reducer;
