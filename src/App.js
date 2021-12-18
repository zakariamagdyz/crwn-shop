import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
///
import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/home-page/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import ContactPage from "./pages/contact-page/contactPage.component";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route
          path="/signin"
          element={user ? <Navigate replace to="/" /> : <ContactPage />}
        />
      </Routes>
    </>
  );
}

export default App;
