import React from 'react';
import './productCard.css'; // Import your CSS file

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <h3>{props.name}</h3>
      {/* image */}
      <img className="product-image" src={props.image} alt={props.name} />
      <p className="product-description">{props.description}</p>
      <p className="product-price">${props.price}</p>
    </div>
  );
};

export default ProductCard;
