import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      // payload = {new product item and userId}
      const userId = action.payload.userId;

      if (!state[userId]) {
        state[userId] = [];
      }
      const product = state[userId].find(
        (product) =>
          product.id === action.payload.id &&
          product.size === action.payload.size &&
          product.color === action.payload.color
      );
      if (product) {
        product.quantity += product.quantity;
      } else {
        state[userId].push(action.payload);
      }
    },

    deleteProduct(state, action) {
      // payload = product and userId
      const userId = action.payload.userId;
      state[userId] = state[userId].filter(
        (product) =>
          product.id !== action.payload.id ||
          product.size !== action.payload.size ||
          product.color !== action.payload.color
      );
    },

    increaseQuantity(state, action) {
      // payload = product and product id;
      const userId = action.payload.userId;
      const product = state[userId].find(
        (product) =>
          product.id === action.payload.id &&
          product.size === action.payload.size &&
          product.color === action.payload.color
      );
      product.quantity++;
      product.totalPrice = product.price * product.quantity;
    },
    decreaseQuantity(state, action) {
      //   payload = product and product id;
      const userId = action.payload.userId;
      const product = state[userId].find(
        (product) =>
          product.id === action.payload.id &&
          product.size === action.payload.size &&
          product.color === action.payload.color
      );

      product.quantity--;
      product.totalPrice = product.price * product.quantity;
      if (product.quantity === 0) {
        cartSlice.caseReducers.deleteProduct(state, action);
      }
    },
    clearCart(state, action) {
      const userId = action.payload;
      state[userId] = [];
    },
    saveShippingAddress: (state, action) => {
      const { userId, shippingAddress } = action.payload;
      state[userId].shippingAddress = shippingAddress;
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// selector functions start with get -> best practice
export const getCart = (userId) => (state) => state.cart[userId] || [];

export const getTotalCartQuantity = (userId) => (state) =>
  state.cart[userId]?.reduce((sum, product) => sum + product.quantity, 0) || 0;

export const getTotalCartPrice = (userId) => (state) =>
  state.cart[userId]?.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

export const getCurrentProductQuantity = (productDetails) => (state) =>
  state.cart[productDetails.userId].find(
    (product) =>
      product.id === productDetails.id &&
      product.size === productDetails.size &&
      product.color === productDetails.color
  )?.quantity || 0;

export const getTotalPriceByQuantity = (productDetails) => (state) =>
  state.cart[productDetails.userId].find(
    (product) =>
      product.id === productDetails.id &&
      product.size === productDetails.size &&
      product.color === productDetails.color
  )?.quantity *
  state.cart[productDetails.userId].find(
    (product) =>
      product.id === productDetails.id &&
      product.size === productDetails.size &&
      product.color === productDetails.color
  )?.price;
