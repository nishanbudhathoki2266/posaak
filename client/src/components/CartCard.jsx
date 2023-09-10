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

/*

[
    {
        "shippingAddress": {
            "tole": "Shantinagar",
            "city": "Itahari",
            "postalCode": "57605"
        },
        "_id": "64fce4b9f998fefc2b325933",
        "user": "64cf73a49fba480ec59ec3ac",
        "products": [
            {
                "product": "64fc793510b025b9af24e403",
                "quantity": 2,
                "image": "product-64cf73bd9fba480ec59ec3ae-1694267976390-2.jpeg",
                "color": "dark blue",
                "size": "medium",
                "price": 600,
                "_id": "64fce4b9f998fefc2b325934"
            }
        ],
        "totalPrice": 1200,
        "orderDate": "2023-09-09T21:33:12.934Z",
        "isDelivered": false,
        "paymentType": "COD",
        "__v": 0
    },
    {
        "shippingAddress": {
            "tole": "Shantinagar",
            "city": "Itahari",
            "postalCode": "57605"
        },
        "_id": "64fd237bd080b201afe001f0",
        "user": "64cf73a49fba480ec59ec3ac",
        "products": [
            {
                "product": "64cf7fe2a804740126a0498a",
                "quantity": 1,
                "image": "product-64cf73bd9fba480ec59ec3ae-1691330089150-3.jpeg",
                "color": "maroon",
                "size": "small",
                "price": 800,
                "_id": "64fd237bd080b201afe001f1"
            },
            {
                "product": "64cf7fe2a804740126a0498a",
                "quantity": 1,
                "image": "product-64cf73bd9fba480ec59ec3ae-1691330089150-3.jpeg",
                "color": "almond",
                "size": "large",
                "price": 800,
                "_id": "64fd237bd080b201afe001f2"
            }
        ],
        "totalPrice": 1600,
        "orderDate": "2023-09-10T01:11:16.823Z",
        "isDelivered": false,
        "paymentType": "COD",
        "__v": 0
    },
    {
        "shippingAddress": {
            "tole": "Shantinagar",
            "city": "Itahari",
            "postalCode": "57605"
        },
        "_id": "64fd3319d080b201afe00259",
        "user": "64cf73a49fba480ec59ec3ac",
        "products": [
            {
                "product": "64cfa3dd36ce1330e82b1fa3",
                "quantity": 1,
                "image": "product-64cf73bd9fba480ec59ec3ae-1694267804534-1.jpeg",
                "color": "red",
                "size": "small",
                "price": 1200,
                "_id": "64fd3319d080b201afe0025a"
            },
            {
                "product": "64cfa3dd36ce1330e82b1fa3",
                "quantity": 1,
                "image": "product-64cf73bd9fba480ec59ec3ae-1694267804534-1.jpeg",
                "color": "almond",
                "size": "large",
                "price": 1200,
                "_id": "64fd3319d080b201afe0025b"
            }
        ],
        "totalPrice": 2400,
        "orderDate": "2023-09-10T01:11:16.823Z",
        "isDelivered": false,
        "paymentType": "COD",
        "__v": 0
    }
]


*/
