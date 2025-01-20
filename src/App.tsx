import React from "react";
import { Route, Routes } from "react-router-dom";

import { HeaderLayout } from "./common/HeaderLayout";
import { CartPage } from "./pages/CartPage";
import { LandingPage } from "./pages/LandingPage";
import { ProductPage } from "./pages/ProductPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<HeaderLayout />}>
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
};

export default App;
