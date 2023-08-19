import React from "react";

function CategoryCard({ category: { name, description } }) {
  return (
    <div className="flex-1 sm:w-[350px] bg-slate-50 sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 shadow-lg cursor-pointer hover:-translate-y-2 transition-transform duration-200">
      <h3 className="mt-5  text-3xl leading-normal font-bold">{name}</h3>
      <p className="mt-3 break-words text-lg leading-normal text-slate-gray">
        {description}
      </p>
    </div>
  );
}

export default CategoryCard;
