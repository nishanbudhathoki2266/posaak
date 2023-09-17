import React from "react";

function CategoryCard({ category: { name, description }, onClick }) {
  return (
    <div
      className="flex-1 sm:w-[350px] bg-white sm:min-w-[350px] w-full rounded-xl drop-shadow-lg px-10 pb-16 pt-8 cursor-pointer hover:-translate-y-2 hover:scale-105 transition-transform duration-200"
      onClick={onClick}
    >
      <h3 className="mt-5  text-3xl leading-normal font-bold">{name}</h3>
      <p className="mt-3 break-words text-lg leading-normal text-slate-gray">
        {description}
      </p>
    </div>
  );
}

export default CategoryCard;
