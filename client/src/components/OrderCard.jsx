import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import ProductCounter from "./ProductCounter";

function OrderCard({ order }) {
  return (
    <Fragment>
      <div className="flex text-left flex-col gap-1 items-start justify-start tracking-normal sm:tracking-wider">
        {order?.products.map((product) => (
          <Fragment key={product?.product + product?.color + product?.size}>
            <Link
              href={`products/${product?.product}`}
              className="self-start text-md font-normal tracking-normal underline hover:-translate-y-[.6px] transition-transform duration-150 ease-out"
            >
              {`${product?.color} (${product?.size}) ${product?.name}: Rs. ${product?.price} x ${product?.quantity}`}
            </Link>
          </Fragment>
        ))}
      </div>

      <div className="py-6 font-semibold text:sm sm:text-md">
        Rs. {order?.totalPrice}/-
      </div>
      <div className="py-6 font-semibold text:sm sm:text-md">
        {order?.isDelivered ? "Delivered" : "Pending"}
      </div>
      <div className="py-6 font-semibold text:sm sm:text-md">
        {new Date(order?.orderDate).toLocaleDateString()}
      </div>
      <div className="py-6 font-semibold text:sm sm:text-md">
        {order?.paymentType}
      </div>
      <div className="py-6 font-semibold text:sm sm:text-md">
        {order?.shippingAddress.tole}, {order?.shippingAddress.city}
      </div>
    </Fragment>
  );
}

export default OrderCard;
