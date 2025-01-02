import React from 'react';

const SearchBar = ({ onSearch, query, setQuery }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
