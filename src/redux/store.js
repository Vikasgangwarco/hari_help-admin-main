// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import OnboardingReducer from './features/onboarding/onboardingSlice'; // Import OnboardingReducer
import loadingReducer from './features/loading/loadingSlice'; // Import loadingReducer

const store = configureStore({
  reducer: {
    OnboardingReducer, // Keep the existing Onboarding reducer
    loading: loadingReducer, // Add the loading reducer
  },
});

export default store;
