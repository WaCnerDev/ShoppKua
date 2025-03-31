import React, { useState, useContext, useEffect } from "react";
import { Card } from "../components/Card";
import { ProductContext } from "../context/ProductContext";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import "../styles/ShoppingCart.css";

export const ShoppingPage = () => {
  const { products } = useContext(ProductContext);
  const [isLoading, setIsLoading] = useState(true);

  const {
    shoppingList,
    addShoppingItem,
    removeShoppingItem,
    increaseQuantity,
    decreaseQuantity,
    clearShoppingCart,
  } = useContext(ShoppingCartContext);

  const handlerAddItem = (item) => {
    addShoppingItem(item);
  };

  const handlerRemoveItem = (id) => {
    removeShoppingItem(id);
  };

  const handlerIncreaseQuantity = (id) => {
    increaseQuantity(id);
  };

  const handlerDecreaseQuantity = (id) => {
    decreaseQuantity(id);
  };

  const handlerClearShoppingCart = () => {
    clearShoppingCart();
  };

  const isAdded = (id) => {
    return shoppingList.some((item) => item.id === id);
  };

  useEffect(() => {
    setIsLoading(products.length > 0);
  }, [products]);

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {isLoading
        ? products.map((product) => (
            <div className="col" key={product.id}>
              <Card
                image={product.image}
                title={product.title}
                price={product.price}
                rating={product.rating.rate}
                onAddItem={() => handlerAddItem(product)}
                onRemoveItem={() => handlerRemoveItem(product.id)}
                added={isAdded(product.id)}
                isLoading={!isLoading}
              />
            </div>
          ))
        : Array.from({ length: 6 }).map((_, index) => (
            <div className="col" key={index}>
              <Card isLoading={true} />
            </div>
          ))}
    </div>
  );
};
