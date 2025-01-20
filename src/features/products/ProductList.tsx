import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import "./ProductList.scss";
import { selectProducts } from "./productsSlice";

const ProductList: React.FC = () => {
  const products = useSelector(selectProducts);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
