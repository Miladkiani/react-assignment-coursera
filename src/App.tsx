import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { LandingPage } from "./pages/LandingPage";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
