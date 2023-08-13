import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  userDetails: {},
  isLoggedIn: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, actions) => {
      return { ...state, isLoggedIn: true };
    },
  },
});
export const { setUserDetails } = userSlice.actions;
export default userSlice.reducer;
