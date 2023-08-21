import Button from "@/components/Button";
import CartCard from "@/components/CartCard";
import Heading from "@/components/Heading";
import ProtectedPage from "@/components/ProtectedPage";
import {
  clearCart,
  getCart,
  getTotalCartPrice,
} from "@/redux/reducerSlices/cartSlice";
import { getIsLoggedIn } from "@/redux/reducerSlices/userSlice";
import Link from "next/link";
import { MdShoppingBag } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

function CartPage() {
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(getIsLoggedIn);

  if (isLoggedIn && !cart.length > 0)
    return (
      <div className="h-[50vh] flex items-center justify-center">
        <div className="flex-col justify-center space-y-4 text-left px-6">
          <div className="text-4xl font-bold text-[#67595E]">Cart Empty</div>
          <div className="text-stone-500 font-medium">
            Your don't have any items in the cart! 🛒
          </div>
          <div className="flex space-x-4 items-center justify-start">
            <Link href="/products">
              <div className="bg-[#67595E] flex gap-2 items-center px-4 py-1 text-white font-medium border-2 border-gray-400 hover:scale-105 cursor-pointer">
                <MdShoppingBag /> Shop Now
              </div>
            </Link>
          </div>
        </div>
      </div>
    );

  return (
    <ProtectedPage url="cart">
      <Heading position="center" className="mt-8">
        Your Cart
      </Heading>
      <div className="px-[.5px] sm:px-4">
        <div className="mt-8 max-w-[1440px] justify-items-center items-center mx-auto grid grid-cols-[1fr_1fr_1fr_1fr] sm:grid-cols-[2fr_1fr_1fr_1fr] w-full gap-y-1">
          <div className="text-sm sm:text-md font-medium uppercase tracking-wide p-3">
            Products
          </div>
          <div className="text-sm sm:text-md font-medium uppercase tracking-wide p-3">
            Quantity
          </div>
          <div className="text-sm sm:text-md font-medium uppercase tracking-wide p-3">
            Price (Rs.)
          </div>
          <div className="text-sm sm:text-md font-medium uppercase tracking-wide p-3">
            Total (Rs.)
          </div>

          {/* Cart products */}

          {cart.map((product, index) => (
            // Also giving index + product id as key because there might be two product ids as user might choose different colors and add to cart
            <CartCard key={product.id + "" + index} product={product} />
          ))}
        </div>
        <div className="max-w-[1440px] mx-auto border-t-2 mt-2 pt-2 relative flex items-center">
          <p className="absolute right-4 text-xl sm:text-2xl font-semibold">
            Total: Rs. {totalCartPrice}/-
          </p>
          <Button variant="primary" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </Button>
        </div>
      </div>
    </ProtectedPage>
  );
}

export default CartPage;
