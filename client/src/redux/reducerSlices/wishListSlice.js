import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: [],
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList(state, action) {
      // payload = {new product item}
      state.wishList.push(action.payload);
    },
    deleteFromWishList(state, action) {
      // payload = product._id
      state.wishList = state.wishList.filter(
        (product) => product.id !== action.payload.id
      );
    },
    clearWishList(state) {
      state.wishList = [];
    },
  },
});

export const { addToWishList, deleteFromWishList, clearWishList } =
  wishListSlice.actions;

export default wishListSlice.reducer;

// selector functions start with get -> best practice
export const getWishList = (state) => state.wishList.wishList;

export const getTotalWishListQuantity = (state) =>
  state.cart.cart.reduce((sum) => sum, 0);
