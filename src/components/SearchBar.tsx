import React, { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [input, setInput] = useState('');
  const debouncedInput = useDebounce(input, 500);

  React.useEffect(() => {
    onSearch(debouncedInput);
  }, [debouncedInput, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search for products..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;
