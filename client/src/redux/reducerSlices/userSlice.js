import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isLoggedIn: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDetails: (state, action) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});
export const { setDetails } = userSlice.actions;
export default userSlice.reducer;

export const getIsLoggedIn = (state) => state.user.isLoggedIn;
