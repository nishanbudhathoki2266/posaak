import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "../reducerSlices/userSlice";
import cartReducer from "../reducerSlices/cartSlice";
import wishListReducer from "../reducerSlices/wishListSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["cart", "wishList"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  wishList: wishListReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
