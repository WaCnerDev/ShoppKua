import React, {useReducer} from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";

const initialState = [];

export const ShoppingCartProvider = ({ children }) => {

  const addShoppingItem = (item) => {
    item.quantity = 1;
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeShoppingItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const increaseQuantity = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

  const clearShoppingCart = () => {
    dispatch({ type: "CLEAR_SHOPPING_CART" });
  };

  const shoppingCartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        return [...state, action.payload];
      case "REMOVE_ITEM":
        return state.filter((item) => item.id !== action.payload);
      case "INCREASE_QUANTITY":
        return state.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      case "DECREASE_QUANTITY":
        return state.map((item) =>
          item.id === action.payload && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
        );
      case "CLEAR_SHOPPING_CART":
        return [];
      default:
        return state;
    }
  }
  const [shoppingList, dispatch] = useReducer(shoppingCartReducer, initialState);

  return (
    <ShoppingCartContext.Provider value={{ shoppingList, addShoppingItem, removeShoppingItem, increaseQuantity, decreaseQuantity, clearShoppingCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
