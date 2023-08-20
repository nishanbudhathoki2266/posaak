import { getTotalCartPrice } from "@/redux/reducerSlices/cartSlice";
import Image from "next/image";
import { Fragment } from "react";
import { useSelector } from "react-redux";

function CartCard({ product }) {
  const totalCartPrice = useSelector(getTotalCartPrice);
  return (
    <Fragment>
      <div className="bg-gray-100 px-2 py-4 flex items-start gap-2 sm:gap-4">
        <div>
          <Image
            src={`http://localhost:8080/img/products/${product.image}`}
            alt={`Image of ${product.name}`}
            height={150}
            width={150}
            className="hidden sm:block"
          />
        </div>
        <div className="flex flex-col items-start tracking-wider">
          <h2 className="self-start text-lg font-semibold tracking-wider">
            {product.name}
          </h2>
          <p className="text-[13px] sm:text-[14px]">
            <span className="font-semibold">Color:</span> {product.color}
          </p>
          <p className="text-[13px] sm:text-[14px]">
            <span className="font-semibold">Size:</span> {product.size}
          </p>
        </div>
      </div>
      <div className="bg-gray-100 px-4 py-6">{product.quantity}</div>
      <div className="bg-gray-100 px-4 py-6">{product.price}</div>
      <div className="bg-gray-100 px-4 py-6">{totalCartPrice}</div>
    </Fragment>
  );
}

export default CartCard;
