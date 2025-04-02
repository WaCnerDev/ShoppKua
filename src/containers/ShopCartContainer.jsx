import React, { useContext } from "react";
import { ShopCartContext } from "../context/ShopCartContext";
import { ShopCart } from "../pages/ShopCart";

export const ShopCartContainer = () => {
  const {
    shoppingList,
    removeShoppingItem,
    increaseQuantity,
    decreaseQuantity,
    clearShoppingCart,
  } = useContext(ShopCartContext);

  const calculateTotal = () => {
    return shoppingList.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
      0
    );
  };

  const formatPrice = (price) => {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  return (
    <ShopCart
      shoppingList={shoppingList}
      removeShoppingItem={removeShoppingItem}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      clearShoppingCart={clearShoppingCart}
      calculateTotal={calculateTotal}
      formatPrice={formatPrice}
    />
  );
};
