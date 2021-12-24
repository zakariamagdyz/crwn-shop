import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectItemsCount } from "../cart-item/cartSlice";
import { signOut } from "../auth/authSlice";
import { ReactComponent as Logo } from "../../assets/svgs/crown.svg";
import CartItem from "../cart-item/CartItem";
import CartDropdown from "../cart-dropdown/CartDropdown";
import "./header.styles.scss";

const Header = ({ isLoggedIn }) => {
  const [toggleDropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();
  const itemsCount = useSelector(selectItemsCount);
  const handleToggleDropdown = () => {
    setDropdown(!toggleDropdown);
  };
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        {isLoggedIn ? (
          <button
            className="option header_btn"
            onClick={() => {
              dispatch(signOut());
            }}
          >
            SIGN OUT
          </button>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        <CartItem
          itemsNumber={itemsCount}
          handleDropdown={handleToggleDropdown}
        />
      </div>

      {!toggleDropdown && <CartDropdown />}
    </div>
  );
};

export default Header;
