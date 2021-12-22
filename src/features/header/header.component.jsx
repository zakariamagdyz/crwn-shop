import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../auth/authSlice";
import { ReactComponent as Logo } from "../../assets/svgs/084 crown.svg";
import "./header.styles.scss";

const Header = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
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
          <div
            className="option"
            onClick={() => {
              dispatch(signOut());
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
