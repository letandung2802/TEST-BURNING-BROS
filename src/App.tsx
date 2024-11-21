import React from 'react';
import ProductList from './components/ProductList';
import './styles/styles.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Product List</h1>
      <ProductList />
    </div>
  );
};

export default App;
