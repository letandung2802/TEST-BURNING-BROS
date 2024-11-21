import React, { useState, useEffect, useCallback } from 'react';
import { fetchProducts, searchProducts } from '../services/productService';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import ProductItem from './ProductItem';
import SearchBar from './SearchBar';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [skip, setSkip] = useState(0);
  const limit = 20;

  const loadProducts = useCallback(async () => {
    const newProducts = await fetchProducts(limit, skip);
    setProducts((prev) => [...prev, ...newProducts]);
    setSkip((prev) => prev + limit);
  }, [skip]);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    if (query) {
      const searchedProducts = await searchProducts(query);
      setProducts(searchedProducts);
    } else {
      setProducts([]);
      setSkip(0);
      loadProducts();
    }
  };

  const [isFetching] = useInfiniteScroll(() => {
    if (!searchQuery) loadProducts();
  });

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="product-list">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      {isFetching && <p>Loading more products...</p>}
    </div>
  );
};

export default ProductList;
