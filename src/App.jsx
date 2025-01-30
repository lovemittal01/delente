import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import MyProfilePage from "./pages/MyProfilePage";
import { CartProvider } from "./context/CardContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product-detail/:id" element={<ProductDetailPage />} />
          <Route path="/my-profile" element={<MyProfilePage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
