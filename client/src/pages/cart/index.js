import CartCard from "@/components/CartCard";
import Heading from "@/components/Heading";
import ProtectedPage from "@/components/ProtectedPage";
import { getCart } from "@/redux/reducerSlices/cartSlice";
import Link from "next/link";
import { Fragment } from "react";
import { MdShoppingBag } from "react-icons/md";
import { useSelector } from "react-redux";

function CartPage() {
  const cart = useSelector(getCart);

  console.log(cart);

  if (!cart.length > 0)
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
        The Cart Page
      </Heading>
      <div className="mt-8 px-2 sm:px-4 grid grid-cols-[2fr_1fr_1fr_1fr] w-full text-center gap-y-1 sm:gap-y-1">
        <div className="text-md font-medium uppercase tracking-wide p-3">
          Products
        </div>
        <div className="text-md font-medium uppercase tracking-wide p-3">
          Quantity
        </div>
        <div className="text-md font-medium uppercase tracking-wide p-3">
          Price
        </div>
        <div className="text-md font-medium uppercase tracking-wide p-3">
          Total
        </div>

        {/* Cart products */}

        {cart.map((product) => (
          <CartCard product={product} />
        ))}
      </div>
    </ProtectedPage>
  );
}

export default CartPage;
