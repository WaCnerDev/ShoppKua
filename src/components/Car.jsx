import React from "react";
import { NavBar } from "./NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import { ShoppingPage } from "../pages/ShoppingPage";
import { ShoppingCartPage } from "../pages/ShoppingCartPage";
import { ProductProvider } from "../context/ProductProvider";
import { ShoppingCartProvider } from "../context/ShoppingCartProvider";

export const Car = () => {
  return (
    <ProductProvider>
      <ShoppingCartProvider>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<ShoppingPage />} />
            <Route path="/shopCart" element={<ShoppingCartPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </ShoppingCartProvider>
    </ProductProvider>
  );
};
