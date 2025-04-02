import React, { useState, useContext, useEffect } from "react";
import { Card } from "../components/Card";
import { ProductContext } from "../context/ProductContext";
import { ShopCartContext } from "../context/ShopCartContext";

export const Home = () => {
  const { products } = useContext(ProductContext);
  const [isLoading, setIsLoading] = useState(true);

  const { shoppingList, addShoppingItem, removeShoppingItem } =
    useContext(ShopCartContext);

  const handlerAddItem = (item) => {
    addShoppingItem(item);
  };

  const handlerRemoveItem = (id) => {
    removeShoppingItem(id);
  };

  const isAdded = (id) => {
    return shoppingList.some((item) => item.id === id);
  };

  useEffect(() => {
    setIsLoading(products.length > 0);
  }, [products]);

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {isLoading
        ? products.map((product) => (
            <div className="col" key={product.id}>
              <Card
                image={product.image}
                title={product.title}
                price={product.price}
                rating={product.rating.rate}
                onAddItem={() => handlerAddItem(product)}
                onRemoveItem={() => handlerRemoveItem(product.id)}
                added={isAdded(product.id)}
                isLoading={!isLoading}
              />
            </div>
          ))
        : Array.from({ length: 6 }).map((_, index) => (
            <div className="col" key={index}>
              <Card isLoading={true} />
            </div>
          ))}
    </div>
  );
};
