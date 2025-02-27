// onboardingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginStatus: "",  // Initially no login status
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setLoginStatus: (state, action) => {
      state.loginStatus = action.payload;
    },
  },
});

export const { setLoginStatus } = onboardingSlice.actions;
export default onboardingSlice.reducer;
