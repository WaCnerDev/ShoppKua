import React from "react";
import "../styles/Card.css";
import Rating from "@mui/material/Rating";

export const Card = ({
  image,
  title,
  price,
  rating,
  onAddItem,
  onRemoveItem,
  added,
  isLoading,
}) => {
  // Function to truncate the title if it exceeds 46 characters
  const truncateTitle = (title) => {
    return title.length > 46 ? title.substring(0, 46) + "..." : title;
  };

  return isLoading ? (
    <div className="card w-100 h-100" aria-hidden="true">
      <div className="image-container">
        <span className="placeholder w-100 h-100 bg-success-subtle"></span>
      </div>
      <div className="col-12 p-3">
        <div className="placeholder-glow">
          <span className="placeholder placeholder-lg rounded-2 mb-2 col-12"></span>
          <div className="row mb-2 mx-0">
            <span className="placeholder col me-5 rounded-1"></span>
            <span className="placeholder col-4 rounded-1 ms-1"></span>
          </div>
        </div>
        <a
          className="btn btn-success disabled placeholder w-100 rounded"
          aria-disabled="true"
        ></a>
      </div>
    </div>
  ) : (
    <div className="card w-100 h-100 shadow-sm">
      <div className="image-container">
        <img src={image} className="card-image card-img-top py-2" alt={title} />
      </div>
      <div className="card-body flex-grow-1 overflow-hidden">
        <h5 className="card-title mb-2">{truncateTitle(title)}</h5>
        <div className="row mb-2">
          <Rating
            name="half-rating-read"
            value={rating}
            precision={0.5}
            readOnly
            className="col"
          />
          <p className="col card-text fw-bold text-end">Price: ${price}</p>
        </div>

        <div className="card-actions">
          {added ? (
            <button
              className="btn btn-remove w-100"
              onClick={onRemoveItem}
              disabled={isLoading}
            >
              Remove
            </button>
          ) : (
            <button
              className="btn btn-success btn-add w-100"
              onClick={onAddItem}
              disabled={isLoading}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
//
