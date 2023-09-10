import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import ProductCounter from "./ProductCounter";
import { getTotalPriceByQuantity } from "@/redux/reducerSlices/cartSlice";

function CartCard({ product }) {
  const pricePerQuantity = useSelector(getTotalPriceByQuantity(product));

  return (
    <Fragment>
      <div className="sm:px-4 sm:py-6 flex items-center gap-2 sm:gap-6">
        <div>
          <Image
            src={`http://localhost:8080/img/products/${product.image}`}
            alt={`Image of ${product.name}`}
            height={120}
            width={120}
            className="hidden sm:block ring-2 ring-offset-2 ring-[#67595E]"
          />
        </div>
        <div className="flex text-left flex-col items-start justify-start tracking-normal sm:tracking-wider">
          <h2 className="self-start text-md sm:text-lg font-semibold tracking-wider">
            {product.name}
          </h2>
          <p className="text-[13px] sm:text-[14px]">
            <span className="font-semibold">Color:</span> {product.color}
          </p>
          <p className="text-[13px] sm:text-[14px]">
            <span className="font-semibold">Size:</span> {product.size}
          </p>
          <Link
            href={`products/${product.id}`}
            className="text-[15px] text-[#67595E] mt-6 font-semibold underline underline-offset-4 hover:-translate-y-1 transition-transform ease-in-out duration-150"
          >
            Details
          </Link>
        </div>
      </div>
      <div className="py-6 font-semibold text:sm sm:text-md">
        <ProductCounter product={product} />
      </div>
      <div className="py-6 font-semibold text:sm sm:text-md">
        {product.price}/-
      </div>
      <div className="py-6 font-semibold text:sm sm:text-md">
        {pricePerQuantity}/-
      </div>
    </Fragment>
  );
}

export default CartCard;
