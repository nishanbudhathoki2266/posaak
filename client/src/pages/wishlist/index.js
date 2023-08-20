import Heading from "@/components/Heading";
import ProtectedPage from "@/components/ProtectedPage";
import WishListCard from "@/components/WishListCard";
import { getWishList } from "@/redux/reducerSlices/wishListSlice";
import Link from "next/link";
import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import { useSelector } from "react-redux";

function WishListPage() {
  const wishList = useSelector(getWishList);

  if (!wishList.length > 0)
    return (
      <div className="h-[50vh] flex items-center justify-center">
        <div className="flex-col justify-center space-y-4 text-left px-6">
          <div className="text-4xl font-bold text-[#67595E]">
            Empty wishlist
          </div>
          <div className="text-stone-500 font-medium">
            Your don't have any wishlists yet! ♥
          </div>
          <div className="flex space-x-4 items-center justify-start">
            <Link href="/products">
              <div className="bg-[#67595E] flex gap-2 items-center px-4 py-1 text-white font-medium border-2 border-gray-400 hover:scale-105 cursor-pointer">
                <AiTwotoneHeart /> Add Some
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  return (
    <ProtectedPage url="wishlist">
      <Heading position="center" className="mt-8">
        Your Wishlist
        <div
          className={`mt-16 max-w-[1440px] mx-auto px-2 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14`}
        >
          {wishList.map((product) => (
            <WishListCard key={product.id} product={product} />
          ))}
        </div>
      </Heading>
    </ProtectedPage>
  );
}

export default WishListPage;
