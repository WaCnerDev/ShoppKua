import React, { useContext } from "react";
import { Card } from "../components/Card";
import { ProductContext } from "../context/ProductContext";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import "../styles/ShoppingCart.css";
import { Footer } from "../components/Footer";

export const ShoppingPage = () => {
  const { products } = useContext(ProductContext);
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
            added={isAdded(product.id)}
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
