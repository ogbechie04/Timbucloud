import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListingPage from "./pages/ListingPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListingPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
