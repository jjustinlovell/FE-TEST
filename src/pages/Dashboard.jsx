import React from "react";
import { NavLink } from "react-router-dom";
import Trending from "../ui/ProductList";
import Button from "../ui/Button";
import TrendingProduct from "../data/TrendingProduct";
import ProductList from "../ui/ProductList";

export default function Dashboard() {
  const username = localStorage.getItem("name");
  return (
    <div className="my-20 md:px-20">
      <div className="flex flex-col items-center gap-5 mt-32 text-center">
        <h1 className="text-3xl">
          Discover Your Unique Style with E-Commerce Website
        </h1>

        <Button type="white" to="/shop">
          Shop Now
        </Button>
      </div>
      <div className="mt-32">
        <h1 className="text-3xl">Trending</h1>
        <div className="flex gap-5 py-12 overflow-scroll hide-scrollbar">
          <ProductList selectedProducts={TrendingProduct} />
        </div>
      </div>
    </div>
  );
}
