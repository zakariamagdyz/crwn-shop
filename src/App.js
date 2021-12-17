import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/homepage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
  );
}

export default App;
