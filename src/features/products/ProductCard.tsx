import React from "react";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { addToCart } from "../cart/cartSlice";
import "./product-card.scss";
import { IProduct, toggleInCart } from "./productsSlice";
import { Button } from "../../common/Button";

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
      <h3>{product.name}</h3>
      <img src={`assets/images/plant.jpg`} alt={product.name} />
      <p className="product-card__price">${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <Button
        className={clsx("product-card__button", {
          "product-card__button--disabled": product.isInCart,
        })}
        disabled={product.isInCart}
        onClick={handleAddToCart}
      >
        {product.isInCart ? "Added to Cart" : "Add to Cart"}
      </Button>
    </div>
  );
};

export default ProductCard;
