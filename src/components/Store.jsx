import React from "react";
import { NavBar } from "./NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import { ShoppingPage } from "../pages/ShoppingPage";
import { ShoppingCartPage } from "../pages/ShoppingCartPage";
import { ProductProvider } from "../context/ProductProvider";
import { ShoppingCartProvider } from "../context/ShoppingCartProvider";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Store = () => {
  return (
    <ProductProvider>
      <ShoppingCartProvider>
        <Header />
        <div className="container py-5">
          <Routes>
            <Route path="/" element={<ShoppingPage />} />
            <Route path="/shopCart" element={<ShoppingCartPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </ShoppingCartProvider>
    </ProductProvider>
  );
};
