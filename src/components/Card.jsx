import React from "react";
import { useState } from "react";
import "../styles/Card.css";

export const Card = ({
  image,
  title,
  description,
  price,
  onAddItem,
  onRemoveItem,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onClearShoppingCart,
}) => {
  const [added, setAdded] = useState(false);
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-price">${price}</p>
      </div>

      {added ? (
        <button
          className="btn-remove"
          type="button"
          onClick={() => {
            setAdded(false);
            onRemoveItem();
          }}
        >
          Remove
        </button>
      ) : (
        <button
          className="btn-add"
          type="button"
          onClick={() => {
            setAdded(true);
            onAddItem();
          }}
        >
          Add
        </button>
      )}
    </div>
  );
};
