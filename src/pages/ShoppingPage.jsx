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
    <>
      <div className="grid-layout">
        {products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            rating={product.rating}
            added={isAdded(product.id)}
            isLoading={isLoading}
            onAddItem={() => handlerAddItem(product)}
            onRemoveItem={() => handlerRemoveItem(product.id)}
            onIncreaseQuantity={handlerIncreaseQuantity}
            onDecreaseQuantity={handlerDecreaseQuantity}
            onClearShoppingCart={handlerClearShoppingCart}
          />
        ))}
      </div>
    </>
  );
};
