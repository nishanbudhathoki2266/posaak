import Image from "next/image";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4 cursor-pointer hover:scale-105 transition-all delay-75">
      <div className="bg-gray-100 p-6 rounded-lg">
        <Image
          className="h-40 rounded w-full object-cover object-center mb-6"
          height={200}
          width={200}
          src=""
          alt="content"
        />
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          {product.name.toUpperCase()}
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          <del>${product.price}</del> ${product.price - product.priceDiscount}
        </h2>
        <p className="leading-relaxed text-base">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
