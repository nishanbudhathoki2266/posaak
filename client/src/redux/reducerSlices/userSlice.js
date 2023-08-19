import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
  isLoggedIn: false,
  token: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDetails: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token ? action.payload.token : state.token;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.user = undefined;
      state.token = "";
    },
  },
});
export const { setDetails, logOut } = userSlice.actions;
export default userSlice.reducer;

// A good practice to export these functions here for useSelector
export const getIsLoggedIn = (state) => state.user.isLoggedIn;
export const getUserDetails = (state) => state.user.user;
export const getToken = (state) => state.user.token;
