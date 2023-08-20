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
      state.cart.push(action.payload);
    },
    deleteFromWishList(state, action) {
      // payload = product._id
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
    },
    clearWishList(state) {
      state.cart = [];
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
