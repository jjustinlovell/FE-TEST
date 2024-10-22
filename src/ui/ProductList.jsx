import ProductCard from "./ProductCard";

export default function ProductList({ selectedProducts }) {
  return (
    <>
      {selectedProducts.map((product) => {
        return <ProductCard Product={product} key={product.path} />;
      })}
    </>
  );
}
