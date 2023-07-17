import React, { useEffect, useState } from "react";
import ItemCard from "../../components/item-card/ItemCard";
import { getProductsWithType } from "../../utils/APIutils";

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const setType = "WHOLESALE";
    getProductsWithType(setType, setItems);
  }, []);

  return (
    <div>
      <h1>Shop Items</h1>
      <div className="card-grid">
        {items.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
