import React, { useState } from 'react';
import axios from 'axios';
import './App.css';  // Ensure this is linked properly for styling
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import { ClipLoader } from 'react-spinners';

const App = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const searchBooks = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10&startIndex=${startIndex}`
      );
      setBooks(response.data.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  const handleNext = () => {
    setStartIndex(startIndex + 10);
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 10);
    }
  };

  return (
    <div>
      <SearchBar onSearch={searchBooks} query={query} setQuery={setQuery} />

      {loading ? (
        <ClipLoader size={50} color="#0000ff" loading={loading} />
      ) : (
        <BookList books={books} />
      )}

      <div>
        <button onClick={handlePrev} disabled={startIndex === 0}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default App;
