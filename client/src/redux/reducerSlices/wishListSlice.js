import { createSlice } from "@reduxjs/toolkit";
import { useId } from "react";
import { toast } from "react-hot-toast";

const initialState = {};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList(state, action) {
      // payload = {new product item} and userId, to keep track of wishlist of each users
      const userId = action.payload.userId;

      if (!state[userId]) {
        state[userId] = [];
      }

      const existingProduct = state[userId].find(
        (product) => product.id === action.payload.id
      );

      if (!existingProduct) {
        state[userId].push(action.payload);

        toast.success("Successfully added to wishlist.");
      } else {
        state[userId] = state[userId].filter((product) => {
          return product.id !== action.payload.id;
        });
        toast.success("Successfully removed from wishList.");
      }
    },
    deleteFromWishList(state, action) {
      // payload ={product.id and userId}
      const { productId, userId } = action.payload;
      state[userId] = state[userId].filter(
        (product) => product.id !== productId
      );
    },
    clearWishList(state, action) {
      const userId = action.payload;
      state[userId] = [];
    },
  },
});

export const { addToWishList, deleteFromWishList, clearWishList } =
  wishListSlice.actions;

export default wishListSlice.reducer;

// selector functions start with get -> best practice
export const getWishList = (id) => (state) => state.wishList[id] || [];

// export const getTotalWishListQuantity = (state) =>
//   state.cart.cart.reduce((sum) => sum, 0);
