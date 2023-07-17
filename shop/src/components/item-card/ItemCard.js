import React from 'react';

const ItemCard = ({ item }) => {
  return (
    <div className="card">
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.price}</p>
    </div>
  );
}

export default ItemCard;
