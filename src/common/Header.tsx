import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartItems } from "../features/cart/cartSlice";
import "./Header.scss";

export const Header: React.FC = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <header className="app-header">
      <div className="header-content">
        <Link to="/" className="logo">
          <img src="path/to/your/logo.png" alt="Company Logo" />
          <span className="company-name"></span>
        </Link>
      </div>
      <div className="cart-icon">
        <Link to="/cart">
          <i className="fas fa-shopping-cart"></i>
          {cartItems.length > 0 && (
            <span className="cart-badge">{cartItems.length}</span>
          )}
        </Link>
      </div>
    </header>
  );
};
