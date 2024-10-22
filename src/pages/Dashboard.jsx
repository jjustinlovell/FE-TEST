import React, { useRef } from "react";
import Button from "../ui/Button";
import TrendingProduct from "../data/TrendingProduct";
import ProductList from "../ui/ProductList";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

export default function Dashboard() {
  const username = localStorage.getItem("name");
  const scrollX = useRef(null);

  const scrollRight = () => {
    scrollX.current.scrollBy({
      left: 300,
    });
  };

  const scrollLeft = () => {
    scrollX.current.scrollBy({
      left: -300,
    });
  };

  return (
    <div className="my-20 md:px-20">
      <div className="flex flex-col items-center justify-center gap-5 mt-32 text-center align-middle h-52 bg-neutral-50">
        <h1 className="text-xl md:text-3xl">
          Discover Your Unique Style with E-Commerce Website
        </h1>

        <Button type="white" to="/shop">
          Shop Now
        </Button>
      </div>
      <div className="relative mt-32">
        <h1 className="text-3xl">Trending</h1>
        <div
          className="flex gap-5 py-12 overflow-scroll hide-scrollbar scroll-smooth"
          ref={scrollX}
        >
          <ProductList selectedProducts={TrendingProduct} />
        </div>
        <button
          className="absolute p-5 bg-white rounded-full shadow-lg -right-7 top-52"
          onClick={scrollRight}
        >
          <AiFillCaretRight />
        </button>
        <button
          className="absolute p-5 bg-white rounded-full shadow-lg -left-7 top-52"
          onClick={scrollLeft}
        >
          <AiFillCaretLeft />
        </button>
      </div>
    </div>
  );
}
