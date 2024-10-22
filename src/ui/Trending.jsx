import TrendingProduct from "../data/TrendingProduct";
import ProductCard from "./ProductCard";

export default function Trending() {
  return (
    <div className="flex gap-5 py-12 overflow-scroll hide-scrollbar">
      {TrendingProduct.map((product) => {
        return <ProductCard Product={product} key={product.path} />;
      })}
    </div>
  );
}
