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
    },
  },
});
export const { setDetails } = userSlice.actions;
export default userSlice.reducer;

export const getIsLoggedIn = (state) => state.user.isLoggedIn;
