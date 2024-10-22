import React, { useState } from "react";
import ShopProduct from "../data/ShopProduct";
import Button from "../ui/Button";
import ProductList from "../ui/ProductList";

export default function Shop() {
  const [category, setCategory] = useState("ALL");

  const selectedCategory =
    category === "ALL"
      ? ShopProduct
      : ShopProduct.filter((product) => product.category === category);

  return (
    <div className="my-20 md:px-20">
      <h1 className="text-3xl">Shop</h1>
      <div className="flex flex-wrap justify-start gap-6 mt-7">
        <Button type="category">All</Button>
        <Button type="category">Men</Button>
        <Button type="category">Women</Button>
        <Button type="category">Kids</Button>
      </div>
      <div>
        <ProductList selectedProducts={selectedCategory} />
      </div>
    </div>
  );
}
