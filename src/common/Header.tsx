import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartItems } from "../features/cart/cartSlice";
import "./Header.scss";

export const Header: React.FC = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <header className="app-header">
      <div className="app-header__content">
        <Link to="/" className="app-header__logo">
          <img
            src="./assets/images/logo.svg"
            alt="Company Logo"
            width={40}
            height={40}
          />
          <div>
            <h3>Plant Company</h3>
            <h6>Lorem ipsum dolor sit amet.</h6>
          </div>
        </Link>
      </div>
      <h3 className="app-header__title">Plant</h3>
      <div className="app-header__cart">
        <div className="app-header__cart-icon">
          <Link to="/cart">{cartItems.length}</Link>
        </div>
      </div>
    </header>
  );
};
