import React from "react";
import Product from "./pages/productDetail/ProductDetail";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/navbar/Header";
import Navbar from "./components/navbar/Navbar";
import Category from "./pages/category/Category";
import Footer from "./components/footer/Footer";
import Cart from "./pages/cart/CartDetail";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
