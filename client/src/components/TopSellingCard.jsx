import Image from "next/image";
import React from "react";

function TopSellingCard({ product: { name, images, sizes, price } }) {
  return (
    <div className="flex items-center gap-4">
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
  );
}

export default TopSellingCard;
