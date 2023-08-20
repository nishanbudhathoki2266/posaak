import React from "react";

function ProductCounter() {
  return (
    <div className="flex items-center gap-4 sm:gap-6">
      <div className="flex items-center gap-2 md:gap-3 text-white">
        <button className="inline-block rounded-lg bg-[#67595E] px-2.5 py-1 md:px-3.5 md:py-2 text-md">
          -
        </button>
        <span className="text-md font-medium text-gray-900">4</span>
        <button className="inline-block rounded-lg bg-[#67595E] px-2.5 py-1 md:px-3.5 md:py-2 text-md">
          +
        </button>
      </div>
    </div>
  );
}

export default ProductCounter;
