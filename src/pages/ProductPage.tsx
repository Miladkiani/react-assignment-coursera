import { FC } from "react";
import ProductList from "../features/products/ProductList";
import "./product-page.scss";

export const ProductPage: FC = () => {
  return (
    <div className="product-page">
      <ProductList />
    </div>
  );
};
