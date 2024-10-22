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
        <Button
          isActive={category === "ALL"}
          onClick={() => setCategory("ALL")}
          type="category"
        >
          All
        </Button>
        <Button
          isActive={category === "MEN"}
          onClick={() => setCategory("MEN")}
          type="category"
        >
          Men
        </Button>
        <Button
          isActive={category === "WOMEN"}
          onClick={() => setCategory("WOMEN")}
          type="category"
        >
          Women
        </Button>
        <Button
          isActive={category === "KIDS"}
          onClick={() => setCategory("KIDS")}
          type="category"
        >
          Kids
        </Button>
      </div>
      <hr className="w-full mt-5" />

      <div className="flex flex-wrap justify-center gap-12 mt-20">
        <ProductList selectedProducts={selectedCategory} />
      </div>
    </div>
  );
}
