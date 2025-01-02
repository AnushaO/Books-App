import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query) {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.items) {
            setBooks(data.items);
          } else {
            setBooks([]);
          }
        })
        .catch((error) => console.error('Error fetching books:', error));
    }
  }, [query]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  const handleClearSearch = () => {
    setQuery(''); 
    setBooks([]); 
  };

  return (
    <div>
      <h1>Google Books Search</h1>
      <SearchBar onSearch={handleSearch} onClearSearch={handleClearSearch} />
      <BookList books={books} />
    </div>
  );
};

export default App;
