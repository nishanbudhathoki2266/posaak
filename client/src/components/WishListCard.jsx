import { deleteFromWishList } from "@/redux/reducerSlices/wishListSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-hot-toast";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

function WishListCard({ product }) {
  const dispatch = useDispatch();

  function handleDeleteFromWishList() {
    dispatch(deleteFromWishList(product.id));
    toast.success("Successfully removed from wishlist.");
  }

  return (
    <div className="max-xs:max-w-7/12 sm:w-full mx-auto border rounded-md shadow-xl p-4 flex flex-col gap-2 hover:scale-[1.004] transition-transform">
      <Image
        src={`http://localhost:8080/img/products/${product.image}`}
        alt={`Image of ${product.name}`}
        height={300}
        width={300}
        className="rounded-md"
      />

      <div className="text-left">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm font-medium">Rs. {product.price}</p>
      </div>
      <div className="flex items-center gap-3 mt-1">
        <Link href={`products/${product.id}`}>
          <AiOutlineEye className="text-xl outline outline-2 outline-[#67595E] rounded-xs outline-offset-2 cursor-pointer" />
        </Link>
        <AiOutlineDelete
          className="text-xl outline outline-2 outline-[#67595E] rounded-xs outline-offset-2 cursor-pointer"
          onClick={handleDeleteFromWishList}
        />
      </div>
    </div>
  );
}

export default WishListCard;
