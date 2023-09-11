import React from "react";

const FilterButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-2 px-4 bg-transparent border-[1.5px] border-gray-400 text-sm tracking-wide rounded-lg outline-none hover:-translate-y-[1px] transition-transform ease-out duration-150"
    >
      {children}
    </button>
  );
};

export default FilterButton;
