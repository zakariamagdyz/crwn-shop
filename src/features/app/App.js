import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../auth/authSlice";
import { useEffect } from "react";
import "./App.css";
import Header from "../header/header.component";
import HomePage from "../../pages/home-page/homepage";
import ShopPage from "../../pages/shop/shop.component";
import ContactPage from "../../pages/contact-page/contactPage.component";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoggedIn) return;
    const user = localStorage.getItem("user");
    if (!user) return;
    dispatch(signIn(JSON.parse(user)));
  }, [dispatch]);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        {/* <Route
          path="/signin"
          element={user ? <Navigate replace to="/" /> : <ContactPage />}
        /> */}
      </Routes>
    </>
  );
}

export default App;
