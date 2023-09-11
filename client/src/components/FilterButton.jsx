import React from "react";

const FilterButton = ({ children }) => {
  return (
    <button className="py-2 px-4 bg-transparent border border-gray-600 text-sm tracking-wide rounded-lg outline-none hover:-translate-y-[1px] transition-transform ease-out duration-150">
      {children}
    </button>
  );
};

export default FilterButton;
