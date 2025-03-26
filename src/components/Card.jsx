import React from "react";
import "../styles/Card.css";
import Rating from "@mui/material/Rating";

export const Card = ({
  image,
  title,
  description,
  price,
  rating,
  onAddItem,
  onRemoveItem,
  added,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onClearShoppingCart,
}) => {
  const truncateTitle = (title) => {
    return title.length > 46 ? title.substring(0, 46) + "..." : title;
  };

  return (
    <div className="card">
      <div className="image-container">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h5 className="card-title">{truncateTitle(title)}</h5>
        <div className="d-flex justify-content-between pb-2">
          <Rating
            name="half-rating-read"
            defaultValue={rating.rate}
            precision={0.5}
            readOnly
          />
          <p className="card-price">${price}</p>
        </div>
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
