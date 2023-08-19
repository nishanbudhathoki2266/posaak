import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
  isLoggedIn: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDetails: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.user = undefined;
    },
  },
});
export const { setDetails, logOut } = userSlice.actions;
export default userSlice.reducer;

export const getIsLoggedIn = (state) => state.user.isLoggedIn;
export const getUserDetails = (state) => state.user.user;
