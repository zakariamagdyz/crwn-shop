import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/home-page/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import ContactPage from "./pages/contact-page/contactPage.component";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
