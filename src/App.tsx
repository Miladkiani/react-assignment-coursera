import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { HeaderLayout } from "./common/HeaderLayout";
import { CartPage } from "./pages/CartPage";
import { LandingPage } from "./pages/LandingPage";
import { ProductPage } from "./pages/ProductPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} index />
        <Route element={<HeaderLayout />}>
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
