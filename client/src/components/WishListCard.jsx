import Image from "next/image";
import React from "react";

function WishListCard({ product }) {
  return (
    <div className="w-full border">
      <div>
        {product.name} - {product.price}
      </div>
    </div>
  );
}

export default WishListCard;
