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
  added,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onClearShoppingCart,
}) => {

  const truncateTitle = (title) => {
    return title.length > 46 ? title.substring(0, 46) + "..." : title;
  }

  return (
    <div className="card">
      <div className="image-container">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h5 className="card-title">{truncateTitle(title)}</h5>
        <p className="card-price">${price}</p>
      </div>

      {added ? (
        <button
          className="btn-remove"
          type="button"
          onClick={() => {
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
            onAddItem();
          }}
        >
          Add
        </button>
      )}
    </div>
  );
};
