import React, {useState, useEffect} from "react";
import {ProductContext} from "./ProductContext";

export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return(
    <ProductContext.Provider value={{products}}>
      {children}
    </ProductContext.Provider>
  )
};
