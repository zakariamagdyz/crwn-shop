import React from "react";
import { ReactComponent as Logo } from "../../assets/svgs/shopping-bag.svg";
import "./cartItems.styles.scss";

const CartItem = ({ itemsNumber }) => {
  return (
    <div className="cart-container">
      <Logo className="logo" />
      <span className="cart-nums">{itemsNumber}</span>
    </div>
  );
};

export default CartItem;
