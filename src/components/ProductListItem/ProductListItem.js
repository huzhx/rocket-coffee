import React from 'react';
import './ProductListItem.css';

const ProductListItem = ({ name, price, imageUrl, onAddToCart, isSoldOut, onSale }) => {
  return (
    <div className={onSale ? ['card', 'on-sale'].join(' ') : 'card'}>
      <h2>
        {name} {onSale ? '(On Sale)' : ''}
      </h2>
      <img src={imageUrl} alt="" />
      <small>{price}</small>
      <button onClick={onAddToCart} disabled={isSoldOut}>
        {isSoldOut ? 'Sold out' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductListItem;
