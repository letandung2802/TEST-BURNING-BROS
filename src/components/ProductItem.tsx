import React from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const ProductItem: React.FC<{ product: Product }> = ({ product }) => (
  <div className="product-item">
    <img src={product.thumbnail} alt={product.title} />
    <h3>{product.title}</h3>
    <p>${product.price}</p>
  </div>
);

export default ProductItem;
