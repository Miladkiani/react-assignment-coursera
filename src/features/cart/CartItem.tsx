import React from "react";
import { useDispatch } from "react-redux";
import { decreaseCount, increaseCount, removeFromCart } from "./cartSlice";

import { IProduct } from "../products/productsSlice";
import "./cart-item.scss";
import { Button } from "../../common/Button";

interface CartItemProps {
  item: IProduct & { count: number };
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={`./assets/images/plant.jpg`} alt={item.name} />
      <div className="cart-item__details">
        <h3 className="cart-item__title">{item.name}</h3>
        <div className="cart-item__quantity-controls">
          <button
            className="cart-item__btn cart-item__btn--decrease"
            onClick={() => dispatch(decreaseCount(item.id))}
          >
            -
          </button>
          <span className="cart-item__count">{item.count}</span>
          <button
            className="cart-item__btn cart-item__btn--increase"
            onClick={() => dispatch(increaseCount(item.id))}
          >
            +
          </button>
        </div>
        <p>Total: ${(item.price * item.count).toFixed(2)}</p>

        <Button
          color="secondary"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
