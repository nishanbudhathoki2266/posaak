import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  userDetails: {},
  isLoggedIn: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
      state.isLoggedIn = true;
    },
  },
});
export const { setUserDetails } = userSlice.actions;
export default userSlice.reducer;

export const getIsLoggedIn = (state) => state.user.isLoggedIn;
