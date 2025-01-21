import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import "./product-list.scss";
import { selectProducts } from "./productsSlice";

const ProductList: React.FC = () => {
  const products = useSelector(selectProducts);

  const groupedProducts = products.reduce(
    (acc: Record<string, typeof products>, product) => {
      const category = product.categories[0];
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    },
    {}
  );

  return (
    <div className="product-list">
      {Object.entries(groupedProducts).map(([category, items]) => (
        <div key={category} className="product-list__section">
          <h2 className="product-list__title">{category}</h2>
          <div className="product-list__grid">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
