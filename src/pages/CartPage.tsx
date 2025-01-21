import { FC, useMemo } from "react";
import { CartItem } from "../features/cart/CartItem";
import { useSelector } from "react-redux";
import { selectCartItems } from "../features/cart/cartSlice";
import "./cart-page.scss";
import { Button } from "../common/Button";
import { Link } from "react-router-dom";

export const CartPage: FC = () => {
  const cartItems = useSelector(selectCartItems);

  const totalPrice = useMemo(() => {
    return cartItems
      .reduce((total, item) => total + item.price * item.count, 0)
      .toFixed(2);
  }, [cartItems]);

  return (
    <div className="cart-page">
      <h2 className="cart-page__title">Your Cart</h2>
      <div className="cart-page__total-price">
        <p>Total Price: ${totalPrice}</p>
      </div>
      {cartItems.length === 0 ? (
        <p className="cart-page__empty-msg">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      )}
      <div className="cart-page__buttons">
        <Button>
          <Link to={"/products"}>Continue Shopping </Link>
        </Button>

        <Button>Checkout</Button>
      </div>
    </div>
  );
};
