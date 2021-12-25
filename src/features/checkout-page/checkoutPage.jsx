import React from "react";
import "./checkoutPage.styles.scss";
import { connect } from "react-redux";

const checkoutPage = ({ checkoutItems }) => {
  return (
    <div className="checkout">
      <div className="checkout__header">
        <span className="checkout__title">Product</span>
        <span className="checkout__title">Description</span>
        <span className="checkout__title">Quantity</span>
        <span className="checkout__title">Price</span>
        <span className="checkout__title">Remove</span>
      </div>

      <div className="checkout__total"> TOTAL : {888}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({ checkoutItems: state.cart.cartItems });
export default connect(mapStateToProps)(checkoutPage);
