import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import your slice reducer

const store = configureStore({
  reducer: {
    user: userReducer, // Add your slice reducer(s) here
  },
});

export default store;
