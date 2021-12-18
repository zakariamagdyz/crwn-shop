import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svgs/084 crown.svg";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../redux/user/user.actions";

const Header = () => {
  const user = useSelector((state) => state.user.currentUser);
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
        {user ? (
          <button
            className="option"
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
      </div>
    </div>
  );
};

export default Header;
