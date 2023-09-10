import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import ProductCounter from "./ProductCounter";

function OrderCard({ order }) {
  return (
    <Fragment>
      <div className="sm:px-4 sm:py-6 flex items-center gap-2 sm:gap-6">
        <div className="flex text-left flex-col items-start justify-start tracking-normal sm:tracking-wider">
          {order?.products.map((product) => (
            <Fragment key={product?._id + product?.color + product?.size}>
              <Link
                href={`/products/${product?._id}`}
                className="self-start text-md sm:text-lg font-semibold tracking-wider inline"
              >
                {`${product?.color} (${product?.size}) ${product?.name}`}
              </Link>
              <span className="ml-2 text-md font-semibold">
                X {product.quantity}
              </span>
            </Fragment>
          ))}
          {/* <p className="text-[13px] sm:text-[14px]">
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
          </Link> */}
        </div>
      </div>
      {/* <div className="py-6 font-semibold text:sm sm:text-md">
        <ProductCounter product={product} />
      </div>
      <div className="py-6 font-semibold text:sm sm:text-md">
        {product.price}/-
      </div>
      <div className="py-6 font-semibold text:sm sm:text-md">
        {pricePerQuantity}/-
      </div> */}
    </Fragment>
  );
}

export default OrderCard;
