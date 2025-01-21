// src/components/HeaderLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const HeaderLayout: React.FC = () => {
  return (
    <div className="header-layout">
      <Header />
      <Outlet />
    </div>
  );
};
