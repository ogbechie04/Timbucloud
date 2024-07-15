import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListingPage from "./pages/ListingPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<ListingPage />} />
          <Route path="/ProductPage/:name" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
}

export default App;
