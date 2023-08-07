import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-neutral-50 sm:w-1/2 lg:w-1/4 p-4 cursor-pointer hover:scale-105 transition-all shadow-md rounded-lg">
      <Image
        className="rounded w-full object-cover object-center mb-6"
        height={800}
        width={800}
        src={`http://localhost:8080/img/products/${product.images[0]}`}
        alt={`Image of ${product.name}`}
      />
      <h3 className="tracking-widest text-black-500 flex justify-between items-center text-lg font-semibold title-font">
        {product.name.toUpperCase()}{" "}
        <span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-3.5 py-1.5 rounded dark:bg-gray-700 dark:text-gray-300">
          {product.category.name.toUpperCase()}
        </span>
      </h3>
      <h2 className="text-md text-gray-900 font-medium title-font mb-2">
        ${product.price}
      </h2>
      <p className="leading-relaxed text-base">
        {product.description.slice(0, 40) + "..."}
      </p>
    </div>
  );
};

export default ProductCard;
