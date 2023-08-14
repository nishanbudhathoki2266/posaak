import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducerSlices/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
