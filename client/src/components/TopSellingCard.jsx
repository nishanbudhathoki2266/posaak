import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function TopSellingCard({
  product: { _id, name, images, sizes, price },
  totalSales,
}) {
  const router = useRouter();
  return (
    <div
      className="flex items-center justify-between"
      onClick={() => router.push(`/products/${_id}`)}
    >
      <div className="flex items-center gap-4 cursor-pointer">
        <Image
          src={`http://localhost:8080/img/products/${images[0]}`}
          alt={`Image of ${name}`}
          height={80}
          width={80}
          className="ring-2 ring-offset-2 ring-cyan-500 rounded-sm"
        />
        <div className="flex flex-col gap-2">
          <span className="text-md uppercase tracking-tighter font-medium">
            {name}
          </span>
          <div className="flex gap-1">
            {sizes.map((size) => (
              <span className="text-xs uppercase tracking-wider font-extralight">
                {size}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-md">Rs. {price}/-</p>
      <p className="text-md">sold x {totalSales}</p>
    </div>
  );
}

export default TopSellingCard;
