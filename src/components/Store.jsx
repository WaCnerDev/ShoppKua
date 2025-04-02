import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { ShopCartContainer } from "../containers/ShopCartContainer";
import { ProductProvider } from "../context/ProductProvider";
import { ShopCartProvider } from "../context/ShopCartProvider";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Store = () => {
  return (
    <ProductProvider>
      <ShopCartProvider>
        <Header />
        <div className="container py-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shopCart" element={<ShopCartContainer />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </ShopCartProvider>
    </ProductProvider>
  );
};
