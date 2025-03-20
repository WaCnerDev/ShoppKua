import React, { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

export const ShoppingCartPage = () => {
  const {
    shoppingList,
    removeShoppingItem,
    increaseQuantity,
    decreaseQuantity,
    clearShoppingCart,
  } = useContext(ShoppingCartContext);

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
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{formatPrice(item.price)}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <button className="btn btn-online-primary">
                  {item.quantity}
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeShoppingItem(item.id)}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4>Total: {formatPrice(calculateTotal())}</h4>

      <div className="d-grid gap-2">
        <button className="btn btn-danger" onClick={() => clearShoppingCart()}>
          Clear shopping cart
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            if (shoppingList.length > 0) {
              print();
              alert("Checkout successful");
            } else {
              alert("Shopping cart is empty");
            }
          }}
        >
          Checkout
        </button>
      </div>
    </>
  );
};
