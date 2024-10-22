import React from "react";

export default function ProductCard({Product}) {

  return (
    <div className="transition-all duration-500 w-[300px] hover:opacity-70 flex-shrink-0">
      <img src={Product.path} alt="" />
      <div className="flex justify-between mt-5 text-sm">
        <h1>{Product.name}</h1>
        <p>{Product.price}</p>
      </div>
    </div>
  );
}
