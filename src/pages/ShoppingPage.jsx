import React, { useContext } from "react";
import { Card } from "../components/Card";
import { ProductContext } from "../context/ProductContext";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

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

  return (
    <>
      <h1>List of products</h1>
      <hr />
      {products.map((product) => (
        <Card
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          onAddItem={() => handlerAddItem(product)}
          onRemoveItem={() => handlerRemoveItem(product.id)}
          onIncreaseQuantity={handlerIncreaseQuantity}
          onDecreaseQuantity={handlerDecreaseQuantity}
          onClearShoppingCart={handlerClearShoppingCart}
        />
      ))}
    </>
  );
};
