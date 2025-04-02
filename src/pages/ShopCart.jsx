import React from "react";

export const ShopCart = ({
  shoppingList,
  formatPrice,
  decreaseQuantity,
  increaseQuantity,
  removeShoppingItem,
  calculateTotal,
  clearShoppingCart,
  print,
}) => {
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
        <button className="btn btn-danger" onClick={clearShoppingCart}>
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
