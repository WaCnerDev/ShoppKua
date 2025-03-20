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
    <div className="tarjeta">
      <img src={image} alt={title} className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{title}</h3>
        <p className="tarjeta-descripcion">{description}</p>
        <p className="tarjeta-precio">${price}</p>
      </div>

      {added ? (
        <button
          className="boton-quitar"
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
          className="boton-agregar"
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
