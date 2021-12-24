import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../auth/authSlice";
import { useEffect } from "react";
import "./App.css";
import Header from "../header/header.component";
import HomePage from "../home-page/homepage";
import ShopCollection from "../shop-collection/shopCollection";
import SignInSignOut from "../signs-page/SignInSignUpPage";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) return;
    dispatch(signIn(JSON.parse(user)));
  }, [dispatch]);

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

export default App;
