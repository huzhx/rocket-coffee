import React from 'react';
import './ProductListItem.css';
import Button from '../../atoms/Button/Button';
import Card from '../../atoms/Card/Card';
import Heading from '../../atoms/Heading/Heading';
import Text from '../../atoms/Text/Text';

const ProductListItem = ({ name, price, imageUrl, onAddToCart, isSoldOut, onSale }) => {
  return (
    <Card highlight={onSale}>
      <Heading>
        {name} {onSale && '(On Sale)'}
      </Heading>
      <img src={imageUrl} alt="" />
      <Text>{price}</Text>
      <Button onClick={onAddToCart} disabled={isSoldOut}>
        {isSoldOut ? 'Sold out' : 'Add to Cart'}
      </Button>
    </Card>
  );
};

export default ProductListItem;
