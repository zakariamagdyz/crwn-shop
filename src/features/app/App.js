import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../auth/authSlice";
import { useEffect } from "react";
import "./App.css";
import Header from "../header/header.component";
import HomePage from "../home-page/homepage";
import ShopCollection from "../shop-collection/shopCollection";
import SignInSignOut from "../signs-page/SignInSignUpPage";

function App({ isLoggedIn, handleSignIn }) {
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) return;
    handleSignIn(JSON.parse(user));
  }, [handleSignIn]);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/*" element={<ShopCollection />} />
        <Route
          path="/signin"
          element={isLoggedIn ? <Navigate replace to="/" /> : <SignInSignOut />}
        />
        <Route path="*" element={<h1>No route Defined</h1>} />
      </Routes>
    </>
  );
}

const mapStateToProps = (state) => {
  return { isLoggedIn: state.auth.isLoggedIn };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSignIn: (user) => dispatch(signIn(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
