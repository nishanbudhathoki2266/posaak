import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  deleteProduct,
  getCurrentProductQuantity,
  increaseQuantity,
} from "@/redux/reducerSlices/cartSlice";
import { getUserDetails } from "@/redux/reducerSlices/userSlice";

function ProductCounter({ product }) {
  const dispatch = useDispatch();
  const userId = useSelector(getUserDetails)?._id;

  // Preparing a payload
  const productDetailsWithUserId = { ...product, userId };

  // To keep track of number of current products in the cart
  const currentProductQuantity = useSelector(
    getCurrentProductQuantity(productDetailsWithUserId)
  );

  return (
    <div className="flex items-center gap-4 sm:gap-6">
      <div className="flex items-center gap-2 md:gap-3 text-white">
        <button
          className="inline-block rounded-lg bg-[#67595E] px-2.5 py-1 md:px-3.5 md:py-2 text-md"
          onClick={() => dispatch(decreaseQuantity(productDetailsWithUserId))}
        >
          -
        </button>
        <span className="text-md font-medium text-gray-900">
          {currentProductQuantity}
        </span>
        <button
          className="inline-block rounded-lg bg-[#67595E] px-2.5 py-1 md:px-3.5 md:py-2 text-md"
          onClick={() => dispatch(increaseQuantity(productDetailsWithUserId))}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ProductCounter;
