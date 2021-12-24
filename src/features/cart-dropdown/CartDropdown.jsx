import "./cartDropdown.styles.scss";
import CustomBtn from "../custom-btn/customBtn.component";

const CartDropdown = ({ cartItems = [] }) => {
  return (
    <div className="drop-down-container">
      {cartItems.length ? "" : <p className="cart-title">your cart is empty</p>}
      <div className="drop-down-footer">
        <CustomBtn inverted>go to checkout</CustomBtn>
      </div>
    </div>
  );
};

export default CartDropdown;
