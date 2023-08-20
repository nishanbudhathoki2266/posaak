import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      // payload = {new product item}
      const product = state.cart.find(
        (product) =>
          product.id === action.payload.id &&
          product.size === action.payload.size &&
          product.color === action.payload.color
      );

      if (product) {
        product.quantity += product.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    deleteProduct(state, action) {
      // payload = product
      state.cart = state.cart.filter(
        (product) =>
          product.id !== action.payload.id ||
          product.size !== action.payload.size ||
          product.color !== action.payload.color
      );
    },

    increaseQuantity(state, action) {
      //   payload = product;
      const product = state.cart.find(
        (product) =>
          product.id === action.payload.id &&
          product.size === action.payload.size &&
          product.color === action.payload.color
      );
      product.quantity++;
      product.totalPrice = product.price * product.quantity;
    },
    decreaseQuantity(state, action) {
      //   payload = product;
      const product = state.cart.find(
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
    clearCart(state) {
      state.cart = [];
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
export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, product) => sum + product.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, product) => sum + product.price, 0);

export const getCurrentProductQuantity =
  ({ id, size, color }) =>
  (state) =>
    state.cart.cart.find(
      (product) =>
        product.id === id && product.size === size && product.color === color
    )?.quantity || 0;
