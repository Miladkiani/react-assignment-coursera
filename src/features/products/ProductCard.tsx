import React from "react";
import { useDispatch } from "react-redux";

import "./ProductCard.scss";
import { addToCart } from "../cart/cartSlice";
import { IProduct, toggleInCart } from "./productsSlice";
import clsx from "clsx";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(toggleInCart(product.id));
  };

  return (
    <div className="product-card">
      <img src={`path/to/your/images/${product.id}.jpg`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <button
        className={clsx("product-card__button", {
          "product-card__button--disabled": product.isInCart,
        })}
        disabled={product.isInCart}
        onClick={handleAddToCart}
      >
        {product.isInCart ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
